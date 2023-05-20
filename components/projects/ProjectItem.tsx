import { Project } from '@/types'
import RevealContainer from '../reveal/RevealContainer'
import Buttons from './Buttons'
import Demo from './Demo'
import Info from './Info'
import Techs from './Techs'

function ProjectItem({ project }: { project: Project }) {
	const { title, description, demo, repoLink, liveLink, marketplace, techs } = project

	return (
		<RevealContainer className='flex flex-col justify-center items-center h-full w-4/5 mx-auto my-40'>
			<div className='flex flex-col justify-center items-center mx-auto my-12'>
				<Info title={title} description={description} />
				<Techs techs={techs} />
				<Buttons repoLink={repoLink} liveLink={liveLink} marketplace={marketplace} />
			</div>
			<Demo demo={demo} title={title} />
		</RevealContainer>
	)
}

export default ProjectItem
