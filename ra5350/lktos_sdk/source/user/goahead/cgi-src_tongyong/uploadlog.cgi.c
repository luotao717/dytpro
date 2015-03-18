/*
 * =====================================================================================
 *
 *       Filename:  uploadlog.cgi.c
 *
 *    Description:  
 *
 *        Version:  1.0
 *        Created:  10/26/2014 10:30:24 AM
 *       Revision:  none
 *       Compiler:  gcc
 *
 *         Author:  Yang Jun, 
 *   Organization:  
 *
 * =====================================================================================
 */
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <errno.h>
#define SD_PATH "/media/sda1"
#define LOG_DOWNLOAD_FILE SD_PATH"/apk_download.log"

static inline char * url_decode(const char *s,  size_t n)
{
#define CHAR_TO_NUM(c) ((((c) & 0x40) >> 3) | (c) & 0x0f) + (((c) & 0x40) >> 6)
	size_t percent_count = 0;
	size_t i,  j;
	for (i = 0; i < n; ++i)
		if (s[i] == '%') ++percent_count;

	char * decode_str = malloc(n - percent_count * 2 + 1);
	if (!decode_str)
		return NULL;

	for (i = 0,  j = 0; i < n - percent_count * 2 && j < n; ++i,  ++j)
	{
		switch (s[j])
		{
			case '%':
				if (j + 2 >= n 
						|| (('0' > s[j + 1] || s[j + 1] > '9') && ('A' > s[j + 1] || s[j + 1] > 'F') && ('a' > s[j + 1] || s[j + 1] > 'f')))
				{
					free(decode_str);
					decode_str = NULL;
					return NULL;
				}
				decode_str[i] = (CHAR_TO_NUM(s[j + 1]) << 4) | CHAR_TO_NUM(s[j + 2]);
				j += 2;
				break;
			case '+':
				decode_str[i] = ' ';
				break;
			default:
				decode_str[i] = s[j];
				break;
		}
	}
	decode_str[n - percent_count * 2] = '\0';

	return decode_str;
}

/* 
 * ===  FUNCTION  ======================================================================
 *         Name:  main
 *  Description:  
 * =====================================================================================
 */
int main(int argc, char *argv[])
{
	const char *content_type = getenv("CONTENT_TYPE");
	const char *content_length = getenv("CONTENT_LENGTH");
	char *data_buff = NULL;
	size_t data_size = 0;
	char *decode_data = NULL;
	FILE *log_fp = NULL;
	int ret = 0;

	if (!content_type 
			|| strncmp(content_type, "application/x-www-form-urlencoded", strlen("application/x-www-form-urlencoded"))) {
		ret = 1;
		goto end;
	}

	if (content_length) {
		errno = 0;
		data_size = strtoul(content_length, NULL, 0);
		if (errno) {
				errno = 0;
				ret = 3;
				goto end;
		}
	} else {
		ret = 2;
		goto end;
	}

	data_buff = malloc(data_size);
	if (!data_buff) {
		ret = 4;
		goto end;
	}

	data_size = fread(data_buff, 1, data_size, stdin);

	if (ferror(stdin)) {
		ret = 5;
		goto end;
	}

	decode_data = url_decode(data_buff, data_size);

	if (!decode_data) {
		ret = 4;
		goto end;
	}

	char *tok = NULL;
	char *saveptr = NULL;
	for (tok = strtok_r(decode_data, "&", &saveptr); tok; tok = strtok_r(NULL, "&", &saveptr)) {
		if (!strncmp(tok, "log=", strlen("log="))) {
			tok += strlen("log=");
			log_fp = fopen(LOG_DOWNLOAD_FILE, "a+");
			if (log_fp) {
				if (fprintf(log_fp, "%s\n", tok) == strlen(tok) + 1)
					ret = 0;
				else
					ret = 6;
				fflush(log_fp);
				fclose(log_fp);
				goto end;
			} else {
				ret = 5;
				goto end;
			}
		}
	}

end:
	if (data_buff)
		free(data_buff);

	if (decode_data)
		free(decode_data);

	printf("Server: %s\n"
			"Pragma: no-cache\n"
			"Content-type: text/html\n"
			"Content-Length: %d\n\n%d", getenv("SERVER_SOFTWARE"), 1, ret);
	return EXIT_SUCCESS;
}				/* ----------  end of function main  ---------- */
