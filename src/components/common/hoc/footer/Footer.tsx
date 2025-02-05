'use client'

import { FaAt, FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import { FaArrowUp } from 'react-icons/fa'
import SectionTitle from '@/src/components/common/SectionTitle'
import Logo from '@/src/components/common/Logo'

import useCursor from '@/src/utils/hooks/useCursor'

const contact = [
	{
		href: 'https://github.com/andrewberty',
		label: 'andrewberty',
		icon: <FaGithub />,
	},
	{
		href: 'https://www.linkedin.com/in/andrew-berty',
		label: 'andrew-berty',
		icon: <FaLinkedin />,
	},
	{
		href: 'mailto:andrewgeorgeberty@gmail.com',
		label: 'andrewgeorgeberty@gmail.com',
		icon: <FaAt />,
	},
]
function Footer({ showContact = true }: { showContact?: boolean }) {
	const { setText } = useCursor()

	return (
		<div>
			{showContact && (
				<section id='contact'>
					<SectionTitle>contact</SectionTitle>

					<div className='flex justify-around items-center my-20'>
						{contact.map(({ href, icon, label }, index) => {
							return (
								<div key={index}>
									<Link
										className='flex flex-col justify-center items-center'
										onMouseOver={() => setText(label)}
										onMouseOut={() => setText('')}
										href={href}
										target='_blank'
										rel='noopener noreferrer'>
										<div className='text-7xl transition-all opacity-80 hover:opacity-100'>{icon}</div>
									</Link>
								</div>
							)
						})}
					</div>
				</section>
			)}

			<footer className='flex flex-col justify-around items-center py-8 min-h-[5vh] space-y-8  md:flex-row-reverse'>
				<FaArrowUp
					className='text-2xl cursor-pointer opacity-80 transition-all hover:opacity-100'
					onClick={() => window.scrollTo(0, 0)}
					onMouseOver={() => setText('back to top')}
					onMouseOut={() => setText('')}
				/>
				<Link
					href='https://github.com/andrew-george'
					className='text-sm p-4 text-center'
					target='_blank'
					rel='noopener noreferrer'>
					&copy; Designed & Developed by <span className='text-[0.9rem] font-semibold'>Andrew Berty</span>
				</Link>
				<Logo />
			</footer>
		</div>
	)
}

export default Footer
