/*
 * =====================================================================================
 *
 *       Filename:  core_apk_update.c
 *
 *    Description:  
 *
 *        Version:  1.0
 *        Created:  10/25/2014 11:37:16 AM
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
#include <errno.h>
#include <pthread.h>
#include <string.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <curl/curl.h>
#include <core_apk_update.h>
#include <config.h>
#include "nvram.h"

static pthread_t thread_id;

enum core_apk_item {
	CORE_APK_VERSION, 
	CORE_APK_SIZE, 
	CORE_APK_URL, 
};

struct core_apk_info {
	long version;
	unsigned long size;
	char *url; 
};

enum parse_state {
	PARSE_OK, 
	PARSE_VERSION_ERROR, 
	PARSE_SIZE_ERROR, 
	PARSE_ERROR, 
};

struct data_buff {
	void *buff;
	size_t size;
	int error;
};

enum parse_state parse_core_apk_line(struct core_apk_info *info, const char *line)
{
	enum parse_state state = PARSE_OK;
	enum core_apk_item item = CORE_APK_VERSION;
	char *saveptr = NULL;
	char *tok = NULL;
	char *line_buff = strdup(line);
	if (!line_buff) {
		state = PARSE_ERROR;
		goto end;
	}

	for (tok = strtok_r(line_buff, " \n", &saveptr), item = CORE_APK_VERSION; 
			tok; 
			tok = strtok_r(NULL, " \n", &saveptr), ++item) {
		switch(item) {
			case CORE_APK_VERSION:
				info->version = strtol(tok, NULL, 0);
				switch(errno) {
					case EINVAL:
					case ERANGE:
						errno = 0;
						state = PARSE_VERSION_ERROR;
						goto end;
						break;
				}
				break;
			case CORE_APK_SIZE:
				info->size = strtoul(tok, NULL, 0);
				switch(errno) {
					case EINVAL:
					case ERANGE:
						errno = 0;
						state = PARSE_SIZE_ERROR;
						goto end;
						break;
				}
				break;
			case CORE_APK_URL:
				if (info->url)
					free(info->url);
				info->url = strdup(tok);
				if (!info->url)
					state = PARSE_ERROR;
				break;
			default:
				break;
		}
	}
	state = PARSE_OK;

end:
	if (line_buff)
		free(line_buff);
	return state;
}

size_t write_buff(char *ptr, size_t size, size_t nmemb, void *userdata)
{
	struct data_buff *buff = (struct data_buff *)userdata;

	if (buff->error) {
		return 0;
	}

	if ((!buff->buff && buff->size) 
			|| (buff->buff && !buff->size)) {
		buff->error = 1;
	}

	buff->buff = realloc(buff->buff, buff->size + size * nmemb + 1);

	if (!buff->buff) {
		buff->error = 2;
		return 0;
	}

	memcpy(buff->buff + buff->size, ptr, size * nmemb);
	buff->size += size * nmemb;
	return size * nmemb;
}

int core_apk_info_update(struct core_apk_info *info)
{
	struct data_buff core_apk_info_buff = {
		.buff = NULL, 
		.size = 0, 
		.error = 0, 
	};
	int retry = 0;
	char *saveptr = NULL;
	char *line = NULL;
	enum parse_state state;
	int ret = 0;

	CURL *handle = curl_easy_init();
	if (!handle) {
		ret = 1;
		goto end;
	}
    char *firstteassistant_update_url = nvram_get(RT2860_NVRAM, "Firstte_Assistant_Update_Url");
	curl_easy_setopt(handle, CURLOPT_URL, firstteassistant_update_url);
	curl_easy_setopt(handle, CURLOPT_WRITEFUNCTION, write_buff);
	curl_easy_setopt(handle, CURLOPT_WRITEDATA, &core_apk_info_buff);
	for (retry = 0; retry < 3; ++retry) {
		if (!curl_easy_perform(handle)) {
			((char *)core_apk_info_buff.buff)[core_apk_info_buff.size] = '\0';
			for (line = strtok_r(core_apk_info_buff.buff, "\n", &saveptr); 
					line; 
					line = strtok_r(NULL, "\n", &saveptr)) {
				state = parse_core_apk_line(info, line);
				if (state == PARSE_OK)
					goto end;
			}
		}
	}
	
	if (retry == 3) {
		ret = 2;
		goto end;
	}

	if (state != PARSE_OK) {
		ret = 3;
		goto end;
	}

end:
	if (core_apk_info_buff.buff) {
		free(core_apk_info_buff.buff);
	}

	if (handle)
		curl_easy_cleanup(handle);

	return ret;
}

int core_apk_update(struct core_apk_info *info)
{
	FILE *old_info_fp = NULL;
	char *old_info_file = NULL;
	char *suffix = NULL;
	struct core_apk_info old_info = {
		.url = NULL,
	};
	char *tmp_core_apk = NULL;
	FILE *tmp_core_apk_fp = NULL;
	CURL *handle = NULL;
	int retry = 0;
	int ret = 0;
	
	old_info_file = strdup(g_config.core_apk_local_path);
	if (!old_info_file) {
		ret = 1;
		goto end;
	}

	suffix = strrchr(old_info_file, '.');

	if (!suffix) {
		old_info_file = realloc(old_info_file, strlen(old_info_file) + 5);
		if (!old_info_file) {
			ret = 1;
			goto end;
		}
	} else {
		if (old_info_file + strlen(old_info_file) - suffix < 4) {
			old_info_file = realloc(old_info_file, suffix - old_info_file + 5);
			if (!old_info_file) {
				ret = 1;
				goto end;
			}
		}
		*suffix = '\0';
	}
	strcat(old_info_file, ".txt");

	old_info_fp = fopen(old_info_file, "r");
	if (!old_info_fp)
		goto download;

	char *line_buff = NULL;
	size_t line_size = 0;
	getline(&line_buff, &line_size, old_info_fp);
	fclose(old_info_fp);
	old_info_fp = NULL;

	if (!line_size)
		goto download;

	if (parse_core_apk_line(&old_info, line_buff) != PARSE_OK)
		goto download;

	if (old_info.version == info->version) {
		ret = 0;
		goto end;
	}

download:
	tmp_core_apk = malloc(strlen(g_config.core_apk_local_path) + 5);
	if (!tmp_core_apk) {
		ret = 1;
		goto end;
	}

	strcpy(tmp_core_apk, g_config.core_apk_local_path);
	strcat(tmp_core_apk, ".tmp");


	handle = curl_easy_init();
	if (!handle) {
		ret = 2;
		goto end;
	}

	curl_easy_setopt(handle, CURLOPT_URL, info->url);
	CURLcode code;
	struct stat apk_stat = {0};
	for (retry = 0; retry < 3; ++retry) {
		tmp_core_apk_fp = fopen(tmp_core_apk, "w");
		if (!tmp_core_apk_fp) {
			ret = 3;
			goto end;
		}
		curl_easy_setopt(handle, CURLOPT_WRITEDATA, tmp_core_apk_fp);
		code = curl_easy_perform(handle);
		fclose(tmp_core_apk_fp);
		if (!code) {
			if (!stat(tmp_core_apk, &apk_stat) && apk_stat.st_size == info->size)
				break;	
		}
	}

	if (retry != 3) {
		rename(tmp_core_apk, g_config.core_apk_local_path);
		if (old_info_fp = fopen(old_info_file, "w")) {
			fprintf(old_info_fp, "%ld %lu %s\n", info->version, info->size, info->url);
			fclose(old_info_fp);
			old_info_fp = NULL;
		}
	} else
		ret = 4;

end:
	if (old_info_file)
		free(old_info_file);

	if (old_info.url)
		free(old_info.url);

	if (tmp_core_apk)
		free(tmp_core_apk);

	if (handle)
		curl_easy_cleanup(handle);

	return ret;
}

void *core_apk_update_thread(void *arg)
{
	struct core_apk_info info = {
		.version = 0,
		.size = 0,
		.url = NULL,
	};
	while (1) {
		if (!core_apk_info_update(&info))
			core_apk_update(&info);
		sleep(g_config.core_apk_update_interval);
	}
}

int core_apk_update_init(void)
{
	pthread_create(&thread_id, NULL, core_apk_update_thread, NULL);	
}

int core_apk_update_cleanup(void)
{
	pthread_join(thread_id, NULL);
}
