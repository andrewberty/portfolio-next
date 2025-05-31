import ClientLayout from '@/src/app/layout.client'
import Landing from '@/src/components/pages/homepage/landing'
import Projects from '@/src/components/pages/homepage/projects/projects'
import Skills from '@/src/components/pages/homepage/skills'

export default function Home() {
	return (
		<ClientLayout>
			<Landing />
			<Projects />
			<Skills />
		</ClientLayout>
	)
}
