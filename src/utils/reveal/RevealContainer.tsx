import { motion, Variants } from 'framer-motion'
import React from 'react'

interface Props {
	children: React.ReactNode
	className?: string
}

function RevealContainer({ children, className }: Props) {
	const container: Variants = {
		show: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	}
	return (
		<motion.div className={className} variants={container} initial='hidden' whileInView='show'>
			{children}
		</motion.div>
	)
}

export default RevealContainer
