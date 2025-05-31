import Logo from '@/src/components/common/logo'
import Link from 'next/link'

const links = [
	{
		title: 'uses',
		href: '/uses',
	},
]
function Navbar() {
	return (
		<nav className='fixed w-max flex gap-8 px-6 py-3 bg-zinc-950 border border-zinc-600/20 rounded-3xl items-center backdrop-blur-sm top-8 left-1/2 -translate-x-1/2 z-50 font-mono text-sm'>
			<div className='gradient-border' />

			<Logo />

			{/* {links.map((link, i) => { */}
			{/* 	return ( */}
			{/* 		<Link key={i} href={link.href} className='capitalize transition-opacity opacity-80 hover:opacity-100'> */}
			{/* 			{link.title} */}
			{/* 		</Link> */}
			{/* 	) */}
			{/* })} */}
		</nav>
	)
}

export default Navbar
