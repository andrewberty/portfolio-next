import Contact from '@/components/common/Contact'
import Footer from '@/components/common/hoc/Footer'
import Header from '@/components/common/hoc/Header'
import Projects from '@/components/pages/homepage/projects/Projects'
import Skills from '@/components/pages/homepage/Skills'

export default function Home() {
	return (
		<>
			<Header />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</>
	)
}
