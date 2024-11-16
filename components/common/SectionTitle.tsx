'use client'

import { motion } from 'motion/react'
import React from 'react'
import RevealContainer from '@/src/utils/reveal/RevealContainer'
import { revealFromTop } from '@/src/utils/reveal/revealVariations'

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
