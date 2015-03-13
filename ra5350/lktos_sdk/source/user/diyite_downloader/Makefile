EXE = diyite_downloader
OBJS = main.o http.o http_download.o config.o core_apk_update.o
LIBS = lib/libcurl.a
CONF_H  = $(ROOTDIR)/$(LINUXDIR)/include/linux/autoconf.h
LOADLIBES += -Llib
LDLIBS	+= -lnvram -lapkupdate -lcurl -pthread

CFLAGS += -O0 -I$(ROOTDIR)/$(LINUXDIR) -I$(ROOTDIR)/lib/libnvram -Iinclude

include ../../config/.config

all: $(OBJS) $(LIBS)
	$(CC) -o $(EXE) $(OBJS) $(LDFLAGS) $(LOADLIBES) $(LDLIBS)

main.o: main.c $(CONF_H)
	$(CC) $(CFLAGS) -c main.c -o $@
http.o: http.c $(CONF_H)
	$(CC) $(CFLAGS) -c http.c -o $@
http_download.o: http_download.c $(CONF_H)
	$(CC) $(CFLAGS) -c http_download.c -o $@
core_apk_update.o: core_apk_update.c $(CONF_H)
	$(CC) $(CFLAGS) -c core_apk_update.c -o core_apk_update.o

romfs:
	$(ROMFSINST) /bin/$(EXE)
	$(ROMFSINST) ntp.sh /sbin/ntp.sh

clean:
	@rm -rf $(EXE)  *.o

