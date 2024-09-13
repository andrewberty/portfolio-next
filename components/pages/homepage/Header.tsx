'use client'

import Paragraph from '@/components/common/Paragraph'

function Header() {
	return (
		<>
			<header className='bg-[url("/assets/images/header.avif")] bg-no-repeat bg-center bg-cover h-[120vh] flex relative transition-all duration-500 mb-20 mix-blend-screen overflow-clip justify-center'>
				<div className='absolute left-0 w-[50%] h-full bg-gradient-to-r from-black to-transparent' />
				<Paragraph className='w-[80%] mx-auto sticky top-[40%] text-4xl justify-center'>
					Welcome to my digital canvas. I’m Andrew, a front-end web developer driven by a passion for visual elegance.
					With a keen eye for design and a love for creating seamless, beautiful experiences, I transform ideas into
					captivating realities. Explore my portfolio and see how artistry and technology come together in every
					project.
				</Paragraph>
				<div className='absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-black to-transparent' />
			</header>
		</>
	)
}

export default Header
