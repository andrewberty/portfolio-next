'use client'

import Image, { StaticImageData } from 'next/image'
import { skills } from '@/src/data/data'
import SectionTitle from '../../common/SectionTitle'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { IconType } from 'react-icons'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
	useGSAP(() => {
		skills.forEach((_, index) => {
			const tl = gsap.timeline()
			const sectionSelector = '#skills-section-' + (index + 1)

			const getSkillsInitial = (dir: 'right' | 'left') => ({
				xPercent: dir === 'left' ? -100 : 100,
				rotate: dir === 'left' ? -100 : 100,
				scale: 2,
				opacity: 0.2,
			})

			const getSkillsAnimation = () => ({ opacity: 1, scale: 1, rotate: 0, xPercent: 0, ease: 'expo.in', stagger: 0.2 })

			tl.set(sectionSelector + ' .title', { yPercent: -200, opacity: 0, scale: 0.8 })
			tl.set(sectionSelector + ' .right-skills .skill', getSkillsInitial('right'))
			tl.set(sectionSelector + ' .left-skills .skill', getSkillsInitial('left'))

			//BUG: titles are present for a split second before the animation starts
			tl.to(sectionSelector + ' .title', { opacity: 0.1, yPercent: 0, scale: 1, ease: 'expo.in' }, 0.5)
			tl.to(sectionSelector + ' .right-skills .skill', getSkillsAnimation(), 0)
			tl.to(sectionSelector + ' .left-skills .skill', getSkillsAnimation(), 0)

			ScrollTrigger.create({
				animation: tl,
				trigger: '#skills-section-' + (index + 1),
				start: 'top bottom',
				end: 'bottom bottom',
				scrub: true,
			})

			gsap
				.timeline({
					scrollTrigger: {
						trigger: '#skills',
						start: 'clamp(top 170%)',
						end: 'clamp(top top)',
						scrub: true,
					},
				})
				.fromTo('#skills > .title', { scale: 20, opacity: 1, rotate: 10 }, { scale: 2, opacity: 0.3, rotate: 0 })
		})
	})

	return (
		<section id='skills' className='relative'>
			<SectionTitle className='title sticky top-0 z-20 mix-blend-difference'>skills</SectionTitle>

			<div className='relative z-10'>
				{skills.map((skill, index) => (
					<div
						key={index}
						id={`skills-section-${index + 1}`}
						className='skills-section py-40 relative flex flex-col justify-center items-center'>
						<div className='absolute mx-auto title w-4/5 opacity-0'>
							<h4 className='text-[10vw] font-thin uppercase relative after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:to-60% flex justify-between w-full'>
								{skill.category.split('').map((letter, i) => (
									<span key={i}>{letter}</span>
								))}
							</h4>
						</div>

						<div className='flex items-center'>
							<div className='left-skills'>
								{skill.skills.map((skill, index) => {
									if (index % 2 === 0) return
									return <Skill skill={skill} key={index} />
								})}
							</div>

							<div className='right-skills'>
								{skill.skills.map((skill, index) => {
									if (index % 2 !== 0) return
									return <Skill skill={skill} key={index} />
								})}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

function Skill({ skill }: { skill: StaticImageData }) {
	return (
		<div className='skill flex justify-center items-center w-24 h-24 bg-white/5 border-2 border-white/5 relative m-4 rounded-lg shrink-0'>
			<Image src={skill} alt='skill' height={50} width={50} className='object-contain aspect-square' />
		</div>
	)
}
