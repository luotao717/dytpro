#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <sys/socket.h>
#include <sys/ioctl.h>
#include <string.h>
#include <fcntl.h>
#include <time.h>
#include <utime.h>
#include <net/if.h>
#include "http.h"
#include "nvram.h"

//for test only
//#define CONFIG_FILE_URL "http://192.168.1.56:15000/firste/initConfig"

#define CONFIG_FILE_URL "http://admin.firstte.com/firste/initConfig"
#define SD_PATH "/media/sda1"
#define CONFIG_FILE_TMP SD_PATH"/initconfig.tmp"
#define LOG_FILE SD_PATH"/init_from_server_log.txt"

int http_post(const char *server, char *buf, size_t count);

/*
 * arguments: ifname  - interface name
 *            if_addr - a 18-byte buffer to store mac address
 * description: fetch mac address according to given interface name
 */
int getIfMac(char *ifname, char *if_hw)
{
	struct ifreq ifr;
	char *ptr;
	int skfd;

	if((skfd = socket(AF_INET, SOCK_DGRAM, 0)) < 0) {
		//error(E_L, E_LOG, T("getIfMac: open socket error"));
		return -1;
	}

	strncpy(ifr.ifr_name, ifname, IF_NAMESIZE);
	if(ioctl(skfd, SIOCGIFHWADDR, &ifr) < 0) {
		close(skfd);
		//error(E_L, E_LOG, T("getIfMac: ioctl SIOCGIFHWADDR error for %s"), ifname);
		return -1;
	}

	ptr = (char *)&ifr.ifr_addr.sa_data;
	sprintf(if_hw, "%02X:%02X:%02X:%02X:%02X:%02X",
			(ptr[0] & 0377), (ptr[1] & 0377), (ptr[2] & 0377),
			(ptr[3] & 0377), (ptr[4] & 0377), (ptr[5] & 0377));

	close(skfd);
	return 0;
}

/*
 * description: write WAN MAC address accordingly
 */
const char* get_wifi_mac()
{
	static char if_mac[18];
	if (getIfMac("ra0", if_mac) == -1)
	{
		sprintf(if_mac,"00:00:00:00:00:00");
	}
	
	return if_mac;
}

char *GetMidStr(const char *string, const char *left, const char *right, const char *div)
{
    int string_len, left_len, right_len, div_len, i, flag, start, end, result_len, m_flag;
    char *result,*temp;
    flag = 0;
    m_flag = 0;
    string_len = strlen(string);
    left_len = strlen(left);
    right_len = strlen(right);
    div_len = strlen(div);
    for(i = 0; i < string_len; i++) {
        //Find the left part.
        if (*(string+i) == *left && flag == 0) {
            if (strncmp(string+i, left, left_len) == 0) {
                flag = 1;
                start = i;
            }
        }
        //Find the right part.
        if (*(string+i) == *right && flag == 1) {
            if (strncmp(string+i, right, right_len) == 0) {
                flag = 2;
                end = i;
            }
        }
        //Get the resutl and set flag to 0.
        if (flag == 2) {
            result_len = end - start - left_len;
            flag = 0; //For complex match
            if (m_flag == 0) {
                result = (char*)malloc(result_len + 1);
                *(result+result_len) = 0;
                strncpy(result, string + start + left_len, result_len);
                m_flag = 1;
            }
            else {
                temp = (char*)malloc(strlen(result) + result_len + div_len + 1);
                *(temp+strlen(result) + result_len + div_len) = 0;
                strncpy(temp, result, strlen(result));
                strncpy(temp + strlen(result), div, div_len);
                strncpy(temp + strlen(result) + div_len, string+start + left_len, result_len);
                result = temp;
            }
        }
    }
    return result;
}

void check_logfile()
{
	struct stat file_stat = {0};
	if (!stat(LOG_FILE, &file_stat) && S_ISREG(file_stat.st_mode))
	{
		if (file_stat.st_size > 10*1024*1024)
		{
			// larger than 10M, delete
			unlink(LOG_FILE);
		}
	}
}

const char *getTimeStr()
{
	static char strtime[30];
	char * tok = NULL;
	time_t now = time(NULL);
	sprintf(strtime, ctime(&now));
	tok = strtok(strtime, "\n");

	return tok;
}

int main(int argc, char *argv[])
{
    int ret, cmd_value;
    int fd_config_tmp, size_config_tmp;
    struct stat bufstat;
    char buf[512] = {0};
    char *buffer;
    char *cmd_str, *system_update_url, *log_record_upload_url;
    char *apk_update_url, *log_record_upload_time, *firstte_assistant_update_url;
    char *local_cmd_str, *box_push_url;
    int local_cmd_value;
    int pingFlag = -1; 
    FILE *log_fp;
    
    //sleep for a while,wait SD card
    sleep(60);

	check_logfile();
	log_fp = fopen(LOG_FILE, "a+");
	if (!log_fp)
		log_fp = stdout;
	fprintf(log_fp, "%s start\n", getTimeStr());
	fflush(log_fp);
    
    //check local cmd value
    local_cmd_str = nvram_get(RT2860_NVRAM, "cmd"); 
    local_cmd_value = atoi(local_cmd_str);
    fprintf(log_fp, "%s local cmd=%s\n", getTimeStr(), local_cmd_str);
	fflush(log_fp);
    if((local_cmd_str != NULL) && (local_cmd_value == 1)) {
        fprintf(log_fp, "%s init has been done. won't init again\n", getTimeStr());
	    fflush(log_fp);
        return;
    }

    //check the network
    while(1) {
        pingFlag = system("ping www.baidu.com");
        if(pingFlag == 0) {
            fprintf(log_fp, "%s network is ok now, try to get config from server\n", getTimeStr());
	        fflush(log_fp);
            break;
        }
        else {
            fprintf(log_fp, "%s network is not ok now, will try again after 10 seconds\n", getTimeStr());
	        fflush(log_fp);
            sleep(10); 
        }
    }

    // try to get config from server
    sprintf(buf, "mac=%s", get_wifi_mac());
    //char *CONFIG_FILE_URL = nvram_get(RT2860_NVRAM, "Config_File_Url");
    ret = http_post(CONFIG_FILE_URL, buf, 512);
    fprintf(log_fp, "%s ret = %d\n", getTimeStr(), ret);
    if(ret <= 0) {
        fprintf(log_fp, "%s get config from server failed\n", getTimeStr());
        return -1;
    }
    else if(ret > 0 && ret < 512) {
        buf[ret] = '\0';
		fprintf(log_fp, "%s Server: %s\n"
			"Pragma: no-cache\n"
			"Content-type: text/html\n"
			"Content-Length: %d\n\n", getTimeStr(), getenv("SERVER_SOFTWARE"), ret);
		fprintf(log_fp, "%s the buf we get:\n", getTimeStr());
		fprintf(log_fp, "%s %s\n", getTimeStr(), buf);
       
        //save tmp file
        FILE *fp = fopen(CONFIG_FILE_TMP, "w+");
        fprintf(fp, "%s", buf);
        fclose(fp);
    }
    fd_config_tmp = open(CONFIG_FILE_TMP, O_RDONLY);
    if(fd_config_tmp < 0) {
        fprintf(log_fp, "%s open %s failed\n", getTimeStr(), CONFIG_FILE_TMP);
        return -1;
    }
    fstat(fd_config_tmp, &bufstat);
    size_config_tmp = bufstat.st_size;
    buffer = malloc(size_config_tmp);
    if (!buffer) {
        fprintf(log_fp, "%s Failed to kmalloc buffer.\n", getTimeStr());
        return -1;
    }

    read(fd_config_tmp, buffer, size_config_tmp);
    cmd_str = GetMidStr(buffer, "\<config cmd=\"", "\"\>", "\n");
    read(fd_config_tmp, buffer, size_config_tmp);
    system_update_url = GetMidStr(buffer, "\<autogradeUrl\>", "\<\/autogradeUrl\>", "\n"); 
    read(fd_config_tmp, buffer, size_config_tmp);
    firstte_assistant_update_url = GetMidStr(buffer, "\<firstteassistant\>", "\<\/firstteassistant\>", "\n"); 
    read(fd_config_tmp, buffer, size_config_tmp);
    log_record_upload_url = GetMidStr(buffer, "\<uploadUrl\>", "\<\/uploadUrl\>", "\n"); 
    read(fd_config_tmp, buffer, size_config_tmp);
    apk_update_url = GetMidStr(buffer, "\<appUpgrade\>", "\<\/appUpgrade\>", "\n"); 
    read(fd_config_tmp, buffer, size_config_tmp);
    box_push_url = GetMidStr(buffer, "\<boxUrl\>", "\<\/boxUrl\>", "\n");
    read(fd_config_tmp, buffer, size_config_tmp);
    log_record_upload_time = GetMidStr(buffer, "\<timeInterval\>", "\<\/timeInterval\>", "\n"); 

    cmd_value = atoi(cmd_str);
    if(cmd_value == 0) {
        fprintf(log_fp, "%s remote cmd=0, no need to init config\n", getTimeStr(), cmd_value);
        return;
    }
    else if(cmd_value == 1) {
       fprintf(log_fp, "%s remote cmd=1, begin init config\n", getTimeStr());
       nvram_set(RT2860_NVRAM, "Firmware_Update_Url", system_update_url); 
       nvram_set(RT2860_NVRAM, "Log_Record_Upload_Url", log_record_upload_url); 
       nvram_set(RT2860_NVRAM, "Firstte_Assistant_Update_Url", firstte_assistant_update_url); 
       nvram_set(RT2860_NVRAM, "Apk_Update_Url", apk_update_url); 
       nvram_set(RT2860_NVRAM, "Box_Push_Url", box_push_url);
       nvram_set(RT2860_NVRAM, "Time_Upload_Interval", log_record_upload_time); 
       fprintf(log_fp, "%s init config from server,done.\n", getTimeStr());

       //once init config done, set local cmd a value, 1
       nvram_set(RT2860_NVRAM, "cmd", "1"); 
       nvram_commit(RT2860_NVRAM);
    }

	fprintf(log_fp, "%s end.\n", getTimeStr());
	if (log_fp && log_fp != stdout && log_fp != stderr)
		fclose(log_fp);
    fclose(fd_config_tmp);
}

