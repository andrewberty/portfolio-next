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

	const rotate = useTransform(scrollYProgress, [0, 1], [0, -10])
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

	return (
		<motion.header
			ref={target}
			className='h-[300dvh] flex relative mb-20 mix-blend-screen overflow-clip justify-center'
			style={{ rotate, opacity }}>
			<Image
				src={HeaderImage}
				alt='header image'
				className='sticky top-0 h-screen object-cover opacity-50 pointer-events-none'
			/>

			<div className='absolute left-0 w-[60%] h-full bg-gradient-to-r from-black to-transparent' />

			<div className='absolute inset-0'>
				<Paragraph className='md:w-[60%] w-[90%] mx-auto sticky top-[50%] -translate-y-1/2 text-[2.2vh] md:text-4xl justify-center'>
					Welcome to my digital canvas. I’m Andrew, a front-end web developer with a passion for visual elegance. I
					transform ideas into captivating realities. In this journey, you will see how artistry and technology come
					together.
				</Paragraph>
			</div>

			<div className='absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-black to-transparent' />
		</motion.header>
	)
}

export default Landing
