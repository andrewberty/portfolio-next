import { motion } from 'framer-motion'
import React from 'react'
import RevealContainer from './reveal/RevealContainer'
import { revealFromTop } from './reveal/revealVariations'

function SectionTitle({ children }: { children: React.ReactNode }) {
	return (
		<RevealContainer>
			<motion.h2
				variants={revealFromTop}
				className='font-sans w-fit mx-auto text-5xl font-extrabold uppercase text-center'>
				{children}
			</motion.h2>
		</RevealContainer>
	)
}

export default SectionTitle
