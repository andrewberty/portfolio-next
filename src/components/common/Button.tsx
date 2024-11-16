import Link from 'next/link'

function BasicButton({ children }: { children: React.ReactNode }) {
	return (
		<button className='flex gap-4 px-6 py-4 bg-zinc-950 border border-zinc-600/20 rounded-3xl items-center backdrop-blur font-mono text-sm hover:scale-105 opacity-70 hover:opacity-100 transition-all'>
			<div className='gradient-border' />
			{children}
		</button>
	)
}

export default function Button({ children, link }: { children: React.ReactNode; link?: string }) {
	if (link) {
		return (
			<Link href={link}>
				<BasicButton>{children}</BasicButton>
			</Link>
		)
	} else {
		return <BasicButton>{children}</BasicButton>
	}
}
