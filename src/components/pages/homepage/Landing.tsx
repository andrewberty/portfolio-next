'use client'

import { cn } from '@/src/utils/cn'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import HeaderImage from '/public/assets/images/header-image.webp'

gsap.registerPlugin(ScrollTrigger)

const text =
	'Welcome to my digital canvas. I’m Andrew, a front-end web developer with a passion for visual elegance. I transform ideas into captivating realities. In this journey, you will see how artistry and technology come together.'

function Landing() {
	const [wordsIndex, setwordsIndex] = useState(0)
	const wordsAtOnce = 5
	const headerRef = useRef(null)

	useGSAP(
		() => {
			gsap.to(headerRef.current, {
				opacity: 1,
				filter: 'blur(0px)',
				clipPath: 'circle(100%)',
				duration: 3,
			})

			gsap
				.timeline({
					scrollTrigger: {
						trigger: headerRef.current,
						start: 'top top',
						end: 'bottom bottom',
						scrub: true,
						pin: true,
						pinSpacing: false,
						onUpdate: self => setwordsIndex(Math.round(self.progress * words.length)),
					},
				})
				.from('.word', { y: '100%', opacity: 0, stagger: 0.1 })

			gsap
				.timeline({
					scrollTrigger: {
						trigger: headerRef.current,
						start: 'top top',
						scrub: true,
					},
				})
				.to(headerRef.current, { rotate: -20, filter: 'blur(12px)', opacity: 0, scale: 0.2 })
		},
		{ scope: headerRef },
	)

	const words = text.split(' ')

	return (
		<header
			ref={headerRef}
			className='h-[300vh] flex relative mix-blend-screen overflow-clip justify-center opacity-0 blur-md'>
			<Image
				src={HeaderImage}
				alt='header image'
				priority
				className='absolute inset-0 h-screen w-screen object-cover opacity-50 pointer-events-none'
			/>

			<div className={cn('md:w-[60%] w-[90%] mx-auto text-[2.2vh] md:text-4xl justify-center mt-[40vh] h-fit')}>
				<div className='flex flex-wrap justify-center items-center'>
					{words.map((word, index) => {
						const isActiveSplit = index + 1 <= wordsIndex && index + wordsAtOnce >= wordsIndex

						return (
							<span
								key={index}
								className={cn('word', 'mr-3 text-orange-500 text-center transition-[filter] duration-500', {
									'font-thin blur-xs lg:blur-md': !isActiveSplit,
									'font-medium blur-0': isActiveSplit,
								})}>
								{word}
							</span>
						)
					})}
				</div>
			</div>
		</header>
	)
}

export default Landing
