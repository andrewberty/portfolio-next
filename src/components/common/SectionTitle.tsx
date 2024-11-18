'use client'

import { cn } from '@/src/utils/cn'
import { motion, HTMLMotionProps } from 'motion/react'
import React from 'react'

type SectionTitleProps = HTMLMotionProps<'h2'> & {
	children: React.ReactNode
	className?: string
}

function SectionTitle({ children, className, ...rest }: SectionTitleProps) {
	return (
		<motion.h2
			className={cn(
				'font-sans w-fit mx-auto text-5xl font-extrabold tracking-tighter uppercase text-center',
				className,
			)}
			{...rest}>
			{children}
		</motion.h2>
	)
}

export default SectionTitle
