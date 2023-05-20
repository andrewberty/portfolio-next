import Link from 'next/link'
import { FaArrowUp } from 'react-icons/fa'
import Logo from './Logo'

function Footer() {
	return (
		<footer className='flex flex-col justify-around items-center py-8 min-h-[5vh] space-y-8  md:flex-row-reverse'>
			<FaArrowUp
				className='text-2xl cursor-pointer opacity-80 transition-all hover:opacity-100'
				onClick={() => window.scrollTo(0, 0)}
			/>
			<Link href='https://github.com/andrew-george' className='text-sm p-4 text-center'>
				&copy; Designed & Developed by <span className='text-[0.9rem] font-semibold'>Andrew Berty</span>
			</Link>
			<Logo />
		</footer>
	)
}

export default Footer
