import { Variants } from 'framer-motion'

const duration = 0.7

export const revealFromLeft: Variants = {
	hidden: { opacity: 0, x: -100 },
	show: { opacity: 1, x: 0, transition: { duration } },
}

export const revealFromRight: Variants = {
	hidden: { opacity: 0, x: 100 },
	show: { opacity: 1, x: 0, transition: { duration } },
}

export const revealFromTop: Variants = {
	hidden: { opacity: 0, y: -100 },
	show: { opacity: 1, y: 0, transition: { duration } },
}

export const revealFromBottom: Variants = {
	hidden: { opacity: 0, y: 100 },
	show: { opacity: 1, y: 0, transition: { duration } },
}
