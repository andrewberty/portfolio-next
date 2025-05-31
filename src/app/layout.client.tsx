'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProgressBar from '@/src/components/common/progress-bar'
import Cursor from '@/src/components/common/cursor'
import { CursorProvider } from '@/src/utils/hooks/use-cursor'
import Navbar from '@/src/components/common/hoc/navbar'
import Footer from '@/src/components/common/hoc/footer'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	useGSAP(() => {
		ScrollSmoother.create({
			smooth: 1,
			effects: true,
			smoothTouch: 0.1,
		})
	}, [])

	return (
		<>
			<div className='grain pointer-events-none' />

			<ProgressBar />

			<CursorProvider>
				<Cursor />
				<Navbar />
				<div id='smooth-wrapper'>
					<div id='smooth-content'>
						<main>{children}</main>
						<Footer />
					</div>
				</div>
			</CursorProvider>
		</>
	)
}
