/*
 * =====================================================================================
 *
 *       Filename:  urlencode.c
 *
 *    Description:  
 *
 *        Version:  1.0
 *        Created:  11/10/2014 08:44:01 PM
 *       Revision:  none
 *       Compiler:  gcc
 *
 *         Author:  Yang Jun, 
 *   Organization:  
 *
 * =====================================================================================
 */
#include <stdlib.h>

char *url_decode(const char *s,  size_t n)
{
#define CHAR_TO_NUM(c) ((((c) & 0x40) >> 3) | (c) & 0x0f) + (((c) & 0x40) >> 6)
	size_t percent_count = 0;
	size_t i,  j;
	if (!s || !n)
		return NULL;

	for (i = 0; i < n; ++i)
		if (s[i] == '%') ++percent_count;

	char *decode_str = malloc(n - percent_count * 2 + 1);
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
