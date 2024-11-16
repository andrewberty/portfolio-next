'use client'

import { motion } from 'motion/react'
import { FaGithub, FaLink } from 'react-icons/fa'
import { revealFromRight } from '@/src/utils/reveal/revealVariations'
import Button from '@/components/common/Button'

function ProjectButtons({
	repoLink,
	liveLink,
	marketplace,
}: {
	repoLink: string | undefined
	liveLink: string | undefined
	marketplace: string | undefined
}) {
	return (
		<motion.div variants={revealFromRight} className='flex justify-between items-center gap-4'>
			{repoLink && (
				<Button link={repoLink}>
					<FaGithub />
					<span>CODE</span>
				</Button>
			)}

			{liveLink && (
				<Button link={liveLink}>
					<FaLink />
					<span>VISIT</span>
				</Button>
			)}

			{marketplace && (
				<Button link={marketplace}>
					<FaLink />
					<span>MARKETPLACE</span>
				</Button>
			)}
		</motion.div>
	)
}

export default ProjectButtons
