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
#include "nvram.h"

#define SD_PATH "/media/sda1"
#define LOG_FILE SD_PATH"/reset_log.txt"
#define CONFIG_FILE "/etc_ro/Wireless/RT2860AP/RT2860_default_vlan"

void check_logfile()
{
	struct stat file_stat = {0};
	if (!stat(LOG_FILE, &file_stat) && S_ISREG(file_stat.st_mode))
	{
		if (file_stat.st_size > 10*1024)
		{
			// larger than 10k, delete
			unlink(LOG_FILE);
		}
	}
}

void reset_config()
{
    system("ralink_init clear 2860");
    system("ralink_init renew 2860 /etc_ro/Wireless/RT2860AP/RT2860_default_vlan");
    system("rm -f /tmp/apcliStatus");
    system("reboot");
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

int main(int argc, char *argv[]) 
{
    int ret;
    char *old_reset_count;
    char *new_reset_count;
    FILE *log_fp;
    int fd_config_file;
    char *buffer;

    //sleep for a while, wait SD card
    sleep(40);
    check_logfile();
    log_fp = fopen(LOG_FILE, "a+");
    if(!log_fp)
        log_fp = stdout;

    //check old_reset_count
    old_reset_count = nvram_get(RT2860_NVRAM, "Reset_Count");
    fprintf(log_fp, "%s start\n", getTimeStr());
    fprintf(log_fp, "%s old_reset_count=%s\n", getTimeStr(), old_reset_count);
    fflush(log_fp);
    if(!strcmp(old_reset_count, "")) {
        fprintf(log_fp, "%s old_reset_count is NULL, so going to do reset\n", getTimeStr());
        fflush(log_fp);
        reset_config();
    }else {
        fd_config_file = open(CONFIG_FILE, O_RDONLY);
        if(fd_config_file < 0) {
            fprintf(log_fp, "%s open %s failed\n", getTimeStr(), CONFIG_FILE);
            fflush(log_fp);
            return -1;
        }
        buffer = malloc(256);
        if(!buffer) {
            fprintf(log_fp, "%s Failed to malloc buffer.\n", getTimeStr());
            fflush(log_fp);
            return -1;
        }
        read(fd_config_file, buffer, 256);
        new_reset_count = GetMidStr(buffer, "Reset_Count=", "\n", "\n");
        fprintf(log_fp, "%s new_reset_count=%s\n", getTimeStr(), new_reset_count);
        ret = strcmp(old_reset_count, new_reset_count);
        if(ret != 0) {
            fprintf(log_fp, "%s config file has been changed, to do reset\n", getTimeStr());
            fflush(log_fp);
            reset_config();
        }else {
            fprintf(log_fp, "%s config file not changed, do nothing\n", getTimeStr());
            fflush(log_fp);
        }
    }

    // clean up
    fclose(log_fp);
    close(fd_config_file);
    free(buffer);
}
