SHELL := /bin/bash
CC := gcc
CFLAGS := -m32 -static -U_FORTIFY_SOURCE -DCOOKIE=$(shell cat cookie) -Wno-implicit-function-declaration
LDFLAGS :=
LDLIBS :=

targets := target0 target1 target2 target3 target4 target5

.PHONY: default checksudo clean install uninstall

default: checkcookie checksudo $(targets) permissions

checkcookie:
	@if ! test -f "cookie"; then \
		echo -e "Cookie not set. Please run './setcookie <uniqname>'.\n"; \
		exit 1; \
	fi

checksudo:
	@if [ $(shell id -u) -ne 0 ]; then \
		echo -e "You are not root. Please run 'sudo make'.\n"; \
		exit 1; \
	fi

target0: CFLAGS += -fno-stack-protector -z execstack 
target1: CFLAGS += -fno-stack-protector -z execstack 
target2: CFLAGS += -fno-stack-protector -z execstack 
target3: CFLAGS += -fno-stack-protector -z execstack 
target4: CFLAGS += -fno-stack-protector -z execstack
target5: CFLAGS += -fno-stack-protector

target0: target0.c helper.c
target1: target1.c helper.c
target2: target2.c helper.c
target3: target3.c helper.c
target4: target4.c helper.c
target5: target5.c helper.c

clean:
	rm -f $(targets) cookie

permissions:
	sudo chown root:$(SUDO_USER) target[2-5]
	sudo chmod 6777 target[2-5]
	@for t in target[2-5]; do \
		if [ `stat -c '%a' $$t` -ne 6777 ]; then \
			echo -e "Setuid permission could not be set. Make sure your files are in a native Linux folder and not a VirtualBox shared folder.\n"; \
			rm -f $(targets); \
			exit 1; \
		fi; \
	done
