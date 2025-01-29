'use client'
import Footer from '@/src/components/common/hoc/footer/Footer'
import Landing from '@/src/components/pages/homepage/Landing'
import Projects from '@/src/components/pages/homepage/projects/Projects'
import Skills from '@/src/components/pages/homepage/Skills'

export default function Home() {
	return (
		<div className='relative overflow-clip'>
			<Landing />
			<Projects />
			{/* <Skills /> */}
			<Footer />
		</div>
	)
}
