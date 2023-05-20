import { FaBootstrap, FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { SiNextdotjs, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { VscJson } from 'react-icons/vsc'

const publicAssetsPath = '/assets/images/projects'

export const skills = [
	'/assets/images/tech-logos/html.svg',
	'/assets/images/tech-logos/css.svg',
	'/assets/images/tech-logos/sass.svg',
	'/assets/images/tech-logos/bootstrap.svg',
	'/assets/images/tech-logos/tailwind.svg',
	'/assets/images/tech-logos/javascript.svg',
	'/assets/images/tech-logos/typescript.svg',
	'/assets/images/tech-logos/react.svg',
	'/assets/images/tech-logos/nextjs.svg',
	'/assets/images/tech-logos/cypress.svg',
	'/assets/images/tech-logos/git.svg',
	'/assets/images/tech-logos/github.svg',
	'/assets/images/tech-logos/netlify.svg',
	'/assets/images/tech-logos/parcel.svg',
	'/assets/images/tech-logos/vercel.svg',
	'/assets/images/tech-logos/figma.svg',
	'/assets/images/tech-logos/xd.svg',
	'/assets/images/tech-logos/nodejs.svg',
	'/assets/images/tech-logos/expressjs.svg',
	'/assets/images/tech-logos/mongodb.svg',
]

interface Logos {
	[key: string]: JSX.Element
}

export const logos: Logos = {
	html: <FaHtml5 />,
	css: <FaCss3Alt />,
	sass: <FaSass />,
	javascript: <FaJsSquare />,
	nodejs: <FaNodeJs />,
	json: <VscJson />,
	bootstrap: <FaBootstrap />,
	react: <FaReact />,
	next: <SiNextdotjs />,
	typescript: <SiTypescript />,
	styledComponents: <SiStyledcomponents />,
	tailwind: <SiTailwindcss />,
}

export const projects = [
	{
		title: 'Personal Portfolio',
		description:
			'Responsively designed portfolio to include all my projects and represent my technical skills and aesthetic',
		techs: ['next', 'tailwind'],
		repoLink: 'https://github.com/andrew-george/portfolio',
		demo: `${publicAssetsPath}/portfolio-mockup.png`,
		liveLink: 'https://andrewberty.vercel.app/',
	},
	{
		title: 'Margin',
		description: 'Minimal note taking app to minimize distractions while taking notes',
		techs: ['sass', 'react'],
		repoLink: 'https://github.com/andrew-george/margin-app-v2.0',
		demo: `${publicAssetsPath}/margin-mockup.png`,
		liveLink: 'https://imargin.vercel.app/',
	},
	{
		title: 'O Fortuna',
		description: 'O Fortuna is a placeholder text generator with latin flavor',
		techs: ['sass', 'react'],
		repoLink: 'https://github.com/andrew-george/O-Fortuna',
		demo: `${publicAssetsPath}/o-fortuna-mockup.png`,
		liveLink: 'https://o-fortuna.vercel.app/',
	},
	{
		title: 'Die Zeitung',
		description: 'Modern designed blog to share stories and experiences',
		techs: ['typescript', 'next', 'styledComponents'],
		repoLink: 'https://github.com/andrew-george/die-zeitung-blog',
		demo: `${publicAssetsPath}/die-zeitung-mockup.png`,
		liveLink: 'https://die-zeitung-blog.vercel.app/',
	},
	{
		title: 'Palette',
		description: 'An interactive color mixer and palette generator',
		techs: ['typescript', 'next', 'css'],
		repoLink: 'https://github.com/andrew-george/palette',
		demo: `${publicAssetsPath}/palette-mockup.png`,
		liveLink: 'https://palette-app.vercel.app/',
	},
]

export const extensions = [
	{
		title: 'Fontsy',
		description: 'A simple extension to control editor and terminal font sizes, weight and ligatures',
		techs: ['nodejs'],
		repoLink: 'https://github.com/andrew-george/fontsy-vscode-extension',
		demo: `${publicAssetsPath}/fontsy-demo.png`,
		marketplace: 'https://marketplace.visualstudio.com/items?itemName=andrewberty.fontsy',
	},
	{
		title: 'Noir Themes',
		description: 'Collection of refined popular themes, just darker or cleaner.',
		techs: ['json'],
		repoLink: 'https://github.com/andrew-george/Noir-vscode-theme',
		demo: `${publicAssetsPath}/noir-demo.png`,
		marketplace: 'https://marketplace.visualstudio.com/items?itemName=andrewberty.noir-theme-bundle',
	},
]
