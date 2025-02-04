import Icons from '@/src/data/tech-logos'
import { Project } from '@/types'
import { FaCss3Alt, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { SiNextdotjs, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { VscJson } from 'react-icons/vsc'

const publicAssetsPath = '/assets/images/projects'

export const skills = [
	{
		category: 'Frontend',
		skills: [
			{ name: 'HTML', logo: Icons.HTMLIcon },
			{ name: 'CSS', logo: Icons.CSSIcon },
			{ name: 'Sass', logo: Icons.SassIcon },
			{ name: 'Styled Components', logo: Icons.StyledComponentsIcon },
			{ name: 'Bootstrap', logo: Icons.BootstrapIcon },
			{ name: 'Tailwind', logo: Icons.TailwindIcon },
			{ name: 'JavaScript', logo: Icons.JavaScriptIcon },
			{ name: 'TypeScript', logo: Icons.TypeScriptIcon },
			{ name: 'Shadcn/ui', logo: Icons.ShadcnIcon },
			{ name: 'React', logo: Icons.ReactIcon },
			{ name: 'Next.js', logo: Icons.NextJsIcon },
			{ name: 'Framer Motion', logo: Icons.MotionIcon },
			{ name: 'GSAP', logo: Icons.GsapIcon },
		],
	},
	{
		category: 'Testing',
		skills: [{ name: 'Cypress', logo: Icons.CypressIcon }],
	},
	{
		category: 'Backend',
		skills: [
			{ name: 'Node.js', logo: Icons.NodeIcon },
			{ name: 'MongoDB', logo: Icons.MongoIcon },
			{ name: 'Express.js', logo: Icons.ExpressIcon },
			{ name: 'Supabase', logo: Icons.SupabaseIcon },
			{ name: 'Firebase', logo: Icons.FirebaseIcon },
			{ name: 'Clerk', logo: Icons.ClerkIcon },
			{ name: 'Sanity.io', logo: Icons.SanityIcon },
		],
	},
	{
		category: 'Dev Tools',
		skills: [
			{ name: 'Git', logo: Icons.GitIcon },
			{ name: 'GitHub', logo: Icons.GithubIcon },
			{ name: 'Vercel', logo: Icons.VercelIcon },
			{ name: 'GitLab', logo: Icons.GitlabIcon },
		],
	},
	{
		category: 'UI/UX',
		skills: [
			{ name: 'Figma', logo: Icons.FigmaIcon },
			{ name: 'Adobe XD', logo: Icons.XDIcon },
		],
	},
]

export const projects: Project[] = [
	{
		title: 'Personal Portfolio',
		description:
			'Responsively designed portfolio to include all my projects and represent my technical skills and aesthetic',
		techs: [SiNextdotjs, SiTailwindcss],
		repoLink: 'https://github.com/andrewberty/portfolio-next',
		demo: `${publicAssetsPath}/portfolio.webp`,
	},
	{
		title: 'Margin',
		description: 'Minimal note taking app to minimize distractions while taking notes',
		techs: [FaSass, FaReact],
		repoLink: 'https://github.com/andrewberty/margin-app-v2.0',
		demo: `${publicAssetsPath}/margin.webp`,
		liveLink: 'https://imargin.vercel.app/',
	},
	{
		title: 'O Fortuna',
		description: 'O Fortuna is a placeholder text generator with latin flavor',
		techs: [FaSass, FaReact],
		repoLink: 'https://github.com/andrewberty/O-Fortuna',
		demo: `${publicAssetsPath}/fortuna.webp`,
		liveLink: 'https://o-fortuna.vercel.app/',
	},
	{
		title: 'Die Zeitung',
		description: 'Modern designed blog to share stories and experiences',
		techs: [SiTypescript, SiNextdotjs, SiStyledcomponents],
		repoLink: 'https://github.com/andrewberty/die-zeitung-blog',
		demo: `${publicAssetsPath}/zeitung.webp`,
		liveLink: 'https://die-zeitung-blog.vercel.app/',
	},
	{
		title: 'Palette',
		description: 'An interactive color mixer and palette generator',
		techs: [SiTypescript, SiNextdotjs, FaCss3Alt],
		repoLink: 'https://github.com/andrewberty/palette',
		demo: `${publicAssetsPath}/palette.webp`,
		liveLink: 'https://palette-app.vercel.app/',
	},
]

export const extensions: Project[] = [
	{
		title: 'Fontsy',
		description: 'A simple extension to control editor and terminal font sizes, weight and ligatures',
		techs: [FaNodeJs],
		repoLink: 'https://github.com/andrew-george/fontsy-vscode-extension',
		demo: `${publicAssetsPath}/fontsy-demo.png`,
		marketplace: 'https://marketplace.visualstudio.com/items?itemName=andrewberty.fontsy',
	},
	{
		title: 'Noir Themes',
		description: 'Collection of refined popular themes, just darker or cleaner.',
		techs: [VscJson],
		repoLink: 'https://github.com/andrew-george/Noir-vscode-theme',
		demo: `${publicAssetsPath}/noir-demo.png`,
		marketplace: 'https://marketplace.visualstudio.com/items?itemName=andrewberty.noir-theme-bundle',
	},
]
