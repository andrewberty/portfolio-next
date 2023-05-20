import { motion } from 'framer-motion'
import { revealFromLeft } from '../reveal/revealVariations'

interface Props {
	title: string
	description: string
}

function Info({ title, description }: Props) {
	return (
		<>
			<motion.p variants={revealFromLeft} className='text-6xl mb-12 text-center font-serif'>
				{title}
			</motion.p>

			<motion.p variants={revealFromLeft} className='text-xl text-center'>
				{description}
			</motion.p>
		</>
	)
}

export default Info
