'use client'
import Footer from '@/src/components/common/hoc/footer/Footer'
import Landing from '@/src/components/pages/homepage/Landing'
import Projects from '@/src/components/pages/homepage/projects/Projects'
import Skills from '@/src/components/pages/homepage/Skills'
import { motion, useScroll, useTransform } from 'motion/react'

export default function Home() {
	const { scrollYProgress } = useScroll()

	const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

	return (
		<div className='relative overflow-clip'>
			<motion.div
				className='fixed top-0 h-1 drop-shadow-[0_10px_10px_rgb(249,115,22)] bg-orange-500 z-50'
				style={{ width }}
			/>
			<Landing />
			<Projects />
			<Skills />
			<Footer />
		</div>
	)
}
