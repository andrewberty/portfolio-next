'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'
import { revealFromRight } from '@/src/utils/reveal/revealVariations'

function Button({ link, children }: { link: string; children: React.ReactNode }) {
	return (
		<Link
			href={link}
			target='_blank'
			rel='noopener noreferrer'
			className='flex justify-center items-center sm:text-base sm:mx-8 sm:my-4 rounded-[10px] transition-all duration-300 ease-in-out sm:hover:bg-white sm:hover:mx-4 sm:hover:my-2 sm:hover:px-4 sm:hover:py-2 hover:text-black'>
			<div className='flex items-center gap-2'>{children}</div>
		</Link>
	)
}

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
