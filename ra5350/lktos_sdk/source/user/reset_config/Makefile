EXE = reset_config
OBJS = main.o
LOADLIBES += -Llib
LDLIBS	+= -lnvram 
CFLAGS += -O0 -I$(ROOTDIR)/$(LINUXDIR) -I$(ROOTDIR)/lib/libnvram -Iinclude

include ../../config/.config

all: $(OBJS)
	$(CC) -o $(EXE) $(OBJS) $(LDFLAGS) $(LOADLIBES) $(LDLIBS)


romfs:
	$(ROMFSINST) /bin/$(EXE)

clean:
	@rm -rf $(EXE)  *.o


