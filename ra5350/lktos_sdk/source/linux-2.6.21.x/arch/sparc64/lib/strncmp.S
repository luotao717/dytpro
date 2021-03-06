/* $Id: //WIFI_SOC/release/SDK_4_1_0_0/source/linux-2.6.21.x/arch/sparc64/lib/strncmp.S#1 $
 * Sparc64 optimized strncmp code.
 *
 * Copyright (C) 1997 Jakub Jelinek (jj@sunsite.mff.cuni.cz)
 */

#include <asm/asi.h>

	.text
	.align	32
	.globl	strncmp
	.type	strncmp,#function
strncmp:
	brlez,pn %o2, 3f
	 lduba	[%o0] (ASI_PNF), %o3
1:
	add	%o0, 1, %o0
	ldub	[%o1], %o4
	brz,pn	%o3, 2f
	 add	%o1, 1, %o1
	cmp	%o3, %o4
	bne,pn	%icc, 2f
	 subcc	%o2, 1, %o2
	bne,a,pt %xcc, 1b
	 ldub	[%o0], %o3
2:
	retl
	 sub	%o3, %o4, %o0
3:
	retl
	 clr	%o0
	.size	strncmp, .-strncmp
