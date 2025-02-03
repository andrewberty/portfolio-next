import BlogPosts from './BlogPosts'
import { extensions, projects } from '@/src/data/data'
import { Project } from '@/types'
import { motion } from 'motion/react'
import ProjectButtons from './ProjectButtons'
import { cn } from '@/src/utils/cn'
import Image from 'next/image'
import SectionTitle from '@/src/components/common/SectionTitle'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
	useGSAP(() => {
		const projects = gsap.utils.toArray('.project')

		gsap.to(projects, {
			xPercent: -100 * (projects.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: '.projects-container',
				pin: true,
				end: '+=2000',
				pinSpacing: true,
				scrub: true,
			},
		})

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.projects-container',
				start: 'clamp(top 170%)',
				end: 'clamp(bottom bottom)',
				scrub: true,
			},
		})

		tl.fromTo('.title', { scale: 20, opacity: 1, rotate: 10 }, { scale: 2, opacity: 0.3, rotate: 0 })
	})

	return (
		<section className='flex flex-col items-center'>
			<div className='relative flex flex-col gap-[4%] justify-center projects-container w-screen h-screen'>
				<SectionTitle className='title z-20 mix-blend-difference absolute top-2 left-1/2 -translate-x-1/2'>
					projects
				</SectionTitle>
				<div className='flex z-10'>
					{projects.map((project, i) => (
						<ProjectItem project={project} key={i} className='shrink-0 w-screen project' />
					))}
				</div>
			</div>

			{/* <SectionTitle>OSS Contributions</SectionTitle> */}
			{/* {extensions.map((extension, i) => ( */}
			{/* 	<ProjectItem project={extension} key={i} /> */}
			{/* ))} */}
			{/**/}
			{/* <SectionTitle>blog posts</SectionTitle> */}
			{/* <BlogPosts /> */}
		</section>
	)
}

export default Projects

function ProjectItem({ project, className }: { project: Project; className?: string }) {
	const { title, description, demo, repoLink, liveLink, marketplace, techs } = project

	return (
		<div className={cn('flex flex-col justify-center items-center px-[5vw] lg:px-0', className)}>
			<div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
				<motion.p className='lg:text-5xl text-3xl text-center font-serif'>{title}</motion.p>
				<motion.p className='lg:text-lg text-sm text-center'>{description}</motion.p>

				<div className='flex justify-center items-center gap-10'>
					{techs.map((Tech, i) => (
						<Tech key={i} size={40} />
					))}
				</div>

				<ProjectButtons repoLink={repoLink} liveLink={liveLink} marketplace={marketplace} />
			</div>
			<motion.div className='relative w-[90vw] lg:w-[50vw] aspect-[3/2] lg:before:back-gradient lg:before:hover:opacity-15'>
				<Image src={demo} alt={title} fill className='object-contain py-6 lg:py-12' />
			</motion.div>
		</div>
	)
}
