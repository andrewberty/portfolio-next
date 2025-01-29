import Logo from '@/src/components/common/Logo'
import './Navbar.css'

const links = [
	{
		url: 'projects',
		title: 'projects',
	},
	{
		url: 'skills',
		title: 'skills',
	},
	{
		url: 'uses',
		title: 'uses',
	},
]
function Navbar() {
	return (
		<nav>
			<div className='gradient-border' />
			<Logo />
			{links.map((link, i) => {
				return (
					<a key={i} href={`#${link.url}`} className='capitalize transition-opacity opacity-80 hover:opacity-100'>
						{link.title}
					</a>
				)
			})}
		</nav>
	)
}

export default Navbar
