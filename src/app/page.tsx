'use client'
import Footer from '@/src/components/common/hoc/footer/Footer'
import Landing from '@/src/components/pages/homepage/Landing'
import Projects from '@/src/components/pages/homepage/projects/Projects'
import Skills from '@/src/components/pages/homepage/Skills'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

export default function Home() {
	useGSAP(() => {
		ScrollSmoother.create({
			smooth: 1,
			effects: true,
			smoothTouch: 0.1,
		})
	}, [])

	return (
		<div className='relative overflow-clip'>
			<Landing />
			<Projects />
			<Skills />
			<Footer />
		</div>
	)
}
