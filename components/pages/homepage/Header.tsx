'use client'

import Paragraph from '@/components/common/Paragraph'

function Header() {
	return (
		<>
			<header className='bg-[url("/assets/images/header.avif")] bg-no-repeat bg-center bg-cover h-[120vh] flex relative transition-all duration-500 mb-20 mix-blend-screen overflow-clip justify-center'>
				<div className='absolute left-0 w-[50%] h-full bg-gradient-to-r from-black to-transparent' />
				<Paragraph className='md:w-[60%] w-[90%] mx-auto sticky top-[20%] md:top-[40%] text-[2.2vh] md:text-3xl justify-center'>
					Welcome to my digital canvas. I’m Andrew, a front-end web developer with a passion for visual elegance. I
					transform ideas into captivating realities. In this journey, you will see how artistry and technology come
					together.
				</Paragraph>
				<div className='absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-black to-transparent' />
			</header>
		</>
	)
}

export default Header
