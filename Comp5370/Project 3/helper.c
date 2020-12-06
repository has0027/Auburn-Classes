#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/random.h>

// This file sets up the environment for each target. You can safely ignore it.

#define STACK_GOAL (0xBFFF0000U-COOKIE)
#define MAX_PAD 0x10000

int main(int argc, char *argv[], char *envp[])
{
#ifdef COOKIE
	// Advance stack by a different amount for each student, so answers
	// are unique.
	alloca(COOKIE);
#endif
#ifdef MINIASLR
	// Optionally, advance stack pointer by a random amount on each run.
	// Only used for target6.
	unsigned int r;
	getentropy(&r, sizeof(unsigned int));
	alloca(r & 0xFF);
#endif

	// Move argv from top of stack to here, and clear envp, to prevent
	// shortcuts.
	char **_argv = alloca(sizeof(char *)*(argc+1));
	_argv[argc] = NULL;
	for (int i=argc-1; i >= 0; i--) {
	  size_t len = strlen(argv[i])+1;
	  _argv[i] = alloca(len);
	  strncpy(_argv[i], argv[i], len);
	  memset(argv[i], 0, len);
	  argv[i] = NULL;
	}
	argv = NULL;
	char **_envp = alloca(sizeof(char *));
	_envp[0] = NULL;
	for (int i=0; envp[i] != 0; i++) {
	  size_t len = strlen(envp[i])+1;
	  memset(envp[i], 0, len);
	  envp[i] = NULL;
	}
	envp = NULL;

	// Make debugging easier by advancing the stack to a position that's
	// invariant of the size of the arguments and environment.
	char *esp = alloca(0);
	if ((esp < (char *)STACK_GOAL) || (esp - (char *)STACK_GOAL > MAX_PAD)) {
		fprintf(stderr, "Can't normalize stack position %p to %p\n", esp, STACK_GOAL);
		return 1;
	}
	alloca(esp - (char *)STACK_GOAL);
#ifdef MINIASLR
	// 2020/03/19: Fix for target6
	alloca(r & 0xFF);
#endif

	// Make it harder to overwrite main's stack frame.
	volatile int canary = 0xB000DEAD;

	int ret = _main(argc, _argv, _envp);

	if (canary != 0xB000DEAD) {
		fprintf(stderr, "Uh oh, the canary is dead.\n" \
				"Don't overwrite the stack frame for main().\n");
	}
	return ret;
}
