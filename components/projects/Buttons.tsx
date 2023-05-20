import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'
import { revealFromRight } from '../reveal/revealVariations'

interface Props {
	repoLink: string | undefined
	liveLink: string | undefined
	marketplace: string | undefined
}

function Buttons({ repoLink, liveLink, marketplace }: Props) {
	return (
		<motion.div variants={revealFromRight} className='flex justify-between items-center [&>svg]:mr-6'>
			{repoLink && (
				<Link href={repoLink} className='project-btn'>
					<FaGithub className='mr-2' /> CODE
				</Link>
			)}

			{liveLink && (
				<Link href={liveLink} className='project-btn'>
					<FaLink className='mr-2' /> VISIT
				</Link>
			)}

			{marketplace && (
				<Link href={marketplace} className='project-btn'>
					<FaLink className='mr-2' /> MARKETPLACE
				</Link>
			)}
		</motion.div>
	)
}

export default Buttons
