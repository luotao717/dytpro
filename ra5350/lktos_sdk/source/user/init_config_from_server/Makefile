EXE = init_config
OBJS = main.o http.o
LOADLIBES += -Llib
LDLIBS	+= -lnvram 
CFLAGS += -O0 -I$(ROOTDIR)/$(LINUXDIR) -I$(ROOTDIR)/lib/libnvram -Iinclude

include ../../config/.config

all: $(OBJS)
	$(CC) -o $(EXE) $(OBJS) $(LDFLAGS) $(LOADLIBES) $(LDLIBS)

http.o: http.c
	$(CC) $(CFLAGS) -c http.c -o $@

romfs:
	$(ROMFSINST) /bin/$(EXE)

clean:
	@rm -rf $(EXE)  *.o


