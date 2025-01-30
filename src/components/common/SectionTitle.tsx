'use client'

import { cn } from '@/src/utils/cn'
import React from 'react'

type SectionTitleProps = {
	children: React.ReactNode
	className?: string
}

function SectionTitle({ children, className, ...rest }: SectionTitleProps) {
	return (
		<h2
			className={cn(
				'font-sans text-orange-500 w-fit mx-auto text-[10vw] lg:text-[5vw] font-extrabold tracking-tighter uppercase text-center',
				className,
			)}
			{...rest}>
			{children}
		</h2>
	)
}

export default SectionTitle
