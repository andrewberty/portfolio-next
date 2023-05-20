function NavItem({ name }: { name: string }) {
	return (
		<a href={`#${name}`} className='capitalize font-medium transition-opacity opacity-80 hover:opacity-100'>
			{name}
		</a>
	)
}

export default NavItem
