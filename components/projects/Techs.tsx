import { logos } from '@/data'
import { motion } from 'framer-motion'
import RevealContainer from '../reveal/RevealContainer'
import { revealFromRight } from '../reveal/revealVariations'

function Techs({ techs }: { techs: string[] }) {
	return (
		<RevealContainer className='flex justify-center items-center'>
			{techs.map((tech, i) => (
				<motion.span variants={revealFromRight} key={i} className='text-5xl m-8'>
					{logos[`${tech}`]}
				</motion.span>
			))}
		</RevealContainer>
	)
}

export default Techs
