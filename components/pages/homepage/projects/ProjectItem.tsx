'use client'

import { logos } from '@/data'
import { Project } from '@/types'
import { motion } from 'motion/react'
import RevealContainer from '@/src/utils/reveal/RevealContainer'
import { revealFromLeft, revealFromRight } from '@/src/utils/reveal/revealVariations'
import Demo from './Demo'
import ProjectButtons from './ProjectButtons'

function ProjectItem({ project }: { project: Project }) {
	const { title, description, demo, repoLink, liveLink, marketplace, techs } = project

	return (
		<RevealContainer className='flex flex-col justify-center items-center w-4/5 mx-auto my-40'>
			<div className='flex flex-col justify-center items-center gap-6'>
				<motion.p variants={revealFromLeft} className='text-5xl text-center font-serif'>
					{title}
				</motion.p>
				<motion.p variants={revealFromLeft} className='text-lg text-center'>
					{description}
				</motion.p>

				<RevealContainer className='flex justify-center items-center gap-10'>
					{techs.map((tech, i) => (
						<motion.span variants={revealFromRight} key={i} className='text-5xl'>
							{logos[`${tech}`]}
						</motion.span>
					))}
				</RevealContainer>

				<ProjectButtons repoLink={repoLink} liveLink={liveLink} marketplace={marketplace} />
			</div>
			<Demo demo={demo} title={title} />
		</RevealContainer>
	)
}

export default ProjectItem
