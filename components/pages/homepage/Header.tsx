'use client'

import Paragraph from '../../common/Paragraph'

function Header() {
	return (
		<header className='bg-[url("/assets/images/header.avif")] bg-no-repeat bg-center bg-cover h-[120vh] flex relative transition-all duration-500 mb-20 mix-blend-screen overflow-clip'>
			<div className='absolute w-[50%] h-full bg-gradient-to-r from-black to-transparent' />
			<Paragraph className='w-[70%] mx-auto sticky top-[40%] text-3xl justify-center'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur incidunt ipsam nulla dicta vero
				veritatis numquam officiis maiores minima?
			</Paragraph>
			<div className='absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black to-transparent' />
		</header>
	)
}

export default Header
