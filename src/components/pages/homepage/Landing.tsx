'use client'

import Paragraph from '@/src/components/common/Paragraph'
import Image from 'next/image'

import HeaderImage from '/public/assets/images/header-image.webp'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

function Landing() {
	const target = useRef(null)
	const { scrollYProgress } = useScroll({
		target: target,
		offset: ['end end', 'end start'],
	})

	const imageRotate = useTransform(scrollYProgress, [0, 1], [0, -20])
	const textRotate = useTransform(scrollYProgress, [0, 1], [0, 20])
	const width = useTransform(scrollYProgress, [0, 1], ['60vw', '100vw'])
	const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

	return (
		<motion.header ref={target} className='h-[300vh] flex relative mb-20 mix-blend-screen overflow-clip justify-center'>
			<motion.div style={{ rotate: imageRotate, opacity }}>
				<Image
					src={HeaderImage}
					alt='header image'
					className='sticky top-0 h-screen object-cover opacity-50 pointer-events-none'
				/>
			</motion.div>

			<motion.div className='absolute left-0 h-full bg-gradient-to-r from-black to-transparent' style={{ width }} />

			<motion.div className='absolute inset-0' style={{ rotate: textRotate }}>
				<Paragraph className='md:w-[60%] w-[90%] mx-auto sticky top-[50%] -translate-y-1/2 text-[2.2vh] md:text-4xl justify-center'>
					Welcome to my digital canvas. I’m Andrew, a front-end web developer with a passion for visual elegance. I
					transform ideas into captivating realities. In this journey, you will see how artistry and technology come
					together.
				</Paragraph>
			</motion.div>

			<div className='absolute bottom-0 w-full h-[10%] bg-gradient-to-t from-black to-transparent' />
		</motion.header>
	)
}

export default Landing
