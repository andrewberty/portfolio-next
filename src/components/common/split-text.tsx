import { cn } from '@/src/utils/cn'
import { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SplitText({ children, className }: { children: string; className?: string }) {
	const [wordsIndex, setwordsIndex] = useState(0)
	const wordsAtOnce = 5

	useGSAP(() => {
		gsap.to('header', { opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.inOut' })

		gsap
			.timeline({
				scrollTrigger: {
					trigger: 'header',
					start: 'top top',
					end: 'bottom bottom',
					scrub: true,
					pin: true,
					pinSpacing: false,
					onUpdate: self => setwordsIndex(Math.round(self.progress * words.length)),
				},
			})
			.from('.word-span', { y: '100%', opacity: 0, rotate: 15, stagger: 0.1 })

		gsap
			.timeline({
				scrollTrigger: {
					trigger: 'header',
					start: 'top top',
					scrub: true,
				},
			})
			.to('header', { rotate: -20, filter: 'blur(12px)', opacity: 0, scale: 0.2 })
	})

	const words = children.split(' ')

	return (
		<div
			className={cn('md:w-[60%] w-[90%] mx-auto text-[2.2vh] md:text-4xl justify-center mt-[40vh] h-fit', className)}>
			<div className='flex flex-wrap justify-center items-center'>
				{words.map((word, index) => {
					const isActiveSplit = index + 1 <= wordsIndex && index + wordsAtOnce >= wordsIndex

					return (
						<span
							key={index}
							className={cn('word-span', 'mr-3 text-orange-500 text-center transition-[filter] duration-500', {
								'font-thin blur-md': !isActiveSplit,
								'font-medium blur-0': isActiveSplit,
							})}>
							{word}
						</span>
					)
				})}
			</div>
		</div>
	)
}
