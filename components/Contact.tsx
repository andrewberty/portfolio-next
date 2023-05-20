import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaAt, FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionTitle from './SectionTitle'
import RevealContainer from './reveal/RevealContainer'
import { revealFromBottom } from './reveal/revealVariations'

function Contact() {
	return (
		<section id='contact'>
			<SectionTitle>contact</SectionTitle>

			<RevealContainer className='flex justify-around items-center my-20'>
				<motion.div variants={revealFromBottom}>
					<Link className='flex flex-col justify-center items-center' href='https://github.com/andrew-george'>
						<FaGithub className='text-7xl transition-all opacity-80 hover:opacity-100' />
					</Link>
				</motion.div>

				<motion.div variants={revealFromBottom}>
					<Link className='contact' href='https://www.linkedin.com/in/andrew-berty'>
						<FaLinkedin className='text-7xl transition-all opacity-80 hover:opacity-100' />
					</Link>
				</motion.div>

				<motion.div variants={revealFromBottom}>
					<Link className='contact' href='mailto:andrewgeorgeberty@gmail.com'>
						<FaAt className='text-7xl transition-all opacity-80 hover:opacity-100' />
					</Link>
				</motion.div>
			</RevealContainer>
		</section>
	)
}

export default Contact
