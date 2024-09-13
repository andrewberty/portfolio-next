import Footer from '@/components/common/hoc/footer/Footer'
import Header from '@/components/pages/homepage/Header'
import Projects from '@/components/pages/homepage/projects/Projects'
import Skills from '@/components/pages/homepage/Skills'

export default function Home() {
	return (
		<>
			<Header />
			<Projects />
			<Skills />
			<Footer />
		</>
	)
}
