import { motion } from 'framer-motion'
import Image from 'next/image'
import { revealFromBottom } from '../reveal/revealVariations'

interface Props {
	demo: string
	title: string
}

function Demo({ demo, title }: Props) {
	return (
		<motion.div
			variants={revealFromBottom}
			className='relative w-4/5 h-[30vh]  md:h-[40rem] before:back-gradient before:hover:opacity-30'>
			<Image src={demo} alt={title} fill className='object-contain' />
		</motion.div>
	)
}

export default Demo
