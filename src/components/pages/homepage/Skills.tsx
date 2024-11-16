'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { skills } from '../../../../data'
import SectionTitle from '../../common/SectionTitle'
import RevealContainer from '@/src/utils/reveal/RevealContainer'
import { revealFromBottom } from '@/src/utils/reveal/revealVariations'

function Skills() {
	return (
		<section id='skills'>
			<SectionTitle>skills</SectionTitle>

			<RevealContainer className='flex justify-center items-center flex-wrap p-12 mb-40'>
				{skills.map((skill, index) => (
					<motion.div
						variants={revealFromBottom}
						key={index}
						className='flex justify-center items-center w-24 h-24 bg-slate-400/30 border-2 border-white/20 relative m-4 rounded-lg'>
						<Image src={skill} alt='skill' height={50} width={50} className='object-contain' />
					</motion.div>
				))}
			</RevealContainer>
		</section>
	)
}

export default Skills
