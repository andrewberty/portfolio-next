import Logo from '../Logo'

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
		url: 'contact',
		title: 'contact',
	},
]
function Navbar() {
	return (
		<nav className='fixed w-max flex gap-8 px-6 py-4 bg-zinc-900/50 border border-zinc-600/20 rounded-3xl items-center backdrop-blur top-[20px] left-1/2 -translate-x-1/2 z-50 font-mono text-sm'>
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
