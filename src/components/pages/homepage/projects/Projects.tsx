import { extensions, projects } from '../../../../../data'
import BlogPosts from './BlogPosts'
import ProjectItem from './ProjectItem'
import SectionTitle from '../../../common/SectionTitle'

function Projects() {
	return (
		<section id='projects' className='flex flex-col items-center overflow-hidden'>
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
