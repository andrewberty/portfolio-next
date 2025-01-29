'use client'

import SplitText from '@/src/components/common/SplitText'
import Image from 'next/image'
import HeaderImage from '/public/assets/images/header-image.webp'

function Landing() {
	return (
		<header className='h-[300vh] flex relative mix-blend-screen overflow-clip justify-center opacity-0 blur-sm'>
			<Image
				src={HeaderImage}
				alt='header image'
				priority
				className='absolute inset-0 h-screen w-screen object-cover opacity-50 pointer-events-none'
			/>

			<SplitText>
				Welcome to my digital canvas. I’m Andrew, a front-end web developer with a passion for visual elegance. I
				transform ideas into captivating realities. In this journey, you will see how artistry and technology come
				together.
			</SplitText>
		</header>
	)
}

export default Landing
