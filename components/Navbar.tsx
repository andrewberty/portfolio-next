import { NavItem } from '.'
import Logo from './Logo'

function Navbar() {
	return (
		<nav className='flex justify-around items-center h-[10vh] w-full bg-black/80 backdrop-blur sticky top-0 z-50 m-auto'>
			<Logo />
			<NavItem name='projects' />
			<NavItem name='skills' />
			<NavItem name='contact' />
		</nav>
	)
}

export default Navbar
