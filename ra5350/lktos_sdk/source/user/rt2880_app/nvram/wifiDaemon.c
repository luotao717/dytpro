#include <stdlib.h>
#include <stdio.h>
#include <errno.h>
#include <unistd.h>

#include "nvram.h"



int main(int argc, char **argv)
{

    int pingFlag=-1;
    FILE *fp;
    char buf[64];
    char *p;
	char *wanmode;
    sleep(40);
    while(1)
    {
        #if defined CONFIG_WAN_AT_P4
            system("mii_mgr -g -p 4 -r 1 > /tmp/wanStatusForLed");
        #else
            system("mii_mgr -g -p 0 -r 1 > /tmp/wanStatusForLed");
        #endif
	    wanmode = (char *)nvram_bufget(RT2860_NVRAM, "wanConnectionMode");

        fp = fopen("/tmp/wanStatusForLed", "r");
        if(fp) {
            while(fgets(buf, 64, fp)) {
                p = strstr(buf, "=");
                *(p+2+3)='\0';
                if(((atoi(p+2+2)) & 0x0002))
                    p=NULL;
            }
            fclose(fp);

            if(p == NULL || (!strcmp(wanmode, "3G"))) {
                printf("wan or 3G modem is connected\n");
                // try to ping after wan is connected
                pingFlag=system("ping www.qq.com");
                if( 0 != pingFlag) {
                    system("gpio l 18 0 4000 0 1 4000");
                }
                else {
                    system("gpio l 18 4000 0 1 0 4000");
                }
                sleep(5);
            }
            else {
                printf("wan is not connected\n");
                // set led to red right now
                system("gpio l 18 0 4000 0 1 4000");
                // restart dnsmasq when wan is not connect
                system("killall dnsmasq");
                system("dnsmasq");
            }
        }
    }

    return 0;
}
