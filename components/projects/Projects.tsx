import { BlogPosts, ProjectItem } from '..'
import { extensions, projects } from '../../data'
import SectionTitle from '../SectionTitle'

function Projects() {
	return (
		<section id='projects'>
			<SectionTitle>projects</SectionTitle>
			{projects.map((project, i) => (
				<ProjectItem project={project} key={i} />
			))}

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
