'use client'

import { motion } from 'framer-motion'
import RevealContainer from './reveal/RevealContainer'
import { revealFromLeft } from './reveal/revealVariations'

function Header() {
	return (
		<header className='bg-[url("/assets/images/header.avif")] bg-no-repeat bg-center bg-cover h-screen flex relative transition-all duration-500 mb-20 mix-blend-screen'>
			<div className='absolute w-[50%] h-full bg-gradient-to-r from-black to-transparent' />
			<RevealContainer className='flex flex-col max-w-[70vw] absolute left-[10%] top-[30%] space-y-4'>
				<motion.p variants={revealFromLeft} className='text-3xl'>
					Hello I am <span className='block font-serif text-6xl'>Andrew</span>
				</motion.p>

				<motion.p variants={revealFromLeft} className='text-3xl'>
					Frontend Developer
				</motion.p>

				<motion.p variants={revealFromLeft}>I code and design websites for life</motion.p>
			</RevealContainer>
		</header>
	)
}

export default Header
