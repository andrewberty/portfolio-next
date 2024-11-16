'use client'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link href='/'>
			<Image
				src='/assets/images/beard_logo.png'
				alt='beard logo'
				width={20}
				height={20}
				className='invert cursor-pointer'
				onClick={() => window.scrollTo(0, 0)}
			/>
		</Link>
	)
}

export default Logo
