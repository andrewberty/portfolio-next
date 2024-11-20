import BlogPosts from './BlogPosts'
import SectionTitle from '../../../common/SectionTitle'
import { logos, extensions, projects } from '@/data'
import { Project } from '@/types'
import { motion, useScroll, useTransform } from 'motion/react'
import ProjectButtons from './ProjectButtons'
import { cn } from '@/src/utils/cn'
import Image from 'next/image'
import useDeviceSize from '@/src/utils/hooks/useDeviceSize'

function Projects() {
	const { width } = useDeviceSize()
	const isDesktop = width >= 1024

	const { scrollYProgress } = useScroll({
		offset: ['start -250%', `end ${isDesktop ? '350%' : '525vh'}`],
	})

	const x = useTransform(scrollYProgress, [0, 1], ['100%', '-100%'])

	const DesktopScale = useTransform(scrollYProgress, [0.1, 0.25, 0.75, 1], [40, 8, 8, 50])
	const MobileScale = useTransform(scrollYProgress, [0.1, 0.25, 0.75, 1], [20, 1.6, 1.6, 50])
	const scale = isDesktop ? DesktopScale : MobileScale

	const opacity = useTransform(scrollYProgress, [0.1, 0.25, 0.75, 1], [0.8, 0.1, 0.1, 0.8])
	const color = useTransform(scrollYProgress, [0.3, 0.5], ['#f97316', '#ffffff'])

	return (
		<section className='flex flex-col items-center'>
			<div className='h-[500vh] relative pt-[20vh]'>
				<div className='flex flex-col gap-[4%] h-[100vh] sticky top-2 lg:top-32'>
					<SectionTitle style={{ scale, color, opacity }}>projects</SectionTitle>
					<motion.div className='flex items-center h-full lg:h-auto will-change-transform' style={{ x }}>
						{projects.map((project, i) => (
							<ProjectItem project={project} key={i} className='shrink-0 w-screen' />
						))}
					</motion.div>
				</div>
			</div>

			<SectionTitle>vs code extensions</SectionTitle>
			{extensions.map((extension, i) => (
				<ProjectItem project={extension} key={i} />
			))}

			<SectionTitle>blog posts</SectionTitle>
			<BlogPosts />
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
					{techs.map((tech, i) => (
						<motion.span key={i} className='text-4xl'>
							{logos[`${tech}`]}
						</motion.span>
					))}
				</div>

				<ProjectButtons repoLink={repoLink} liveLink={liveLink} marketplace={marketplace} />
			</div>
			<motion.div className='relative w-screen lg:w-[50vw] aspect-[3/2] lg:before:back-gradient lg:before:hover:opacity-15'>
				<Image src={demo} alt={title} fill className='object-contain py-6 lg:py-12' />
			</motion.div>
		</div>
	)
}
