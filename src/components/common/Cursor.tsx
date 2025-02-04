'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import useCursor from '@/src/utils/hooks/useCursor'

export default function Cursor() {
	const cursorSize = 35

	const { text } = useCursor()

	useGSAP(
		(context, _) => {
			if (text) {
				gsap.fromTo('.cursor-text', { opacity: 0 }, { opacity: 1, duration: 0.2, ease: 'power3.out' })

				gsap.to('.cursor', {
					backgroundColor: '#f97316',
					width: 'max-content',
					height: 'max-content',
					padding: '6px 10px',
					duration: 0.5,
					ease: 'expo',
				})
			} else {
				context.revert()
			}
		},
		{ dependencies: [text] },
	)

	useGSAP((_, contextSafe) => {
		const tl = gsap.timeline({
			onComplete: () => window.addEventListener('mousemove', followCursor),
		})

		tl.set('.cursor', {
			scale: 100,
			x: '50vw',
			y: '50vh',
			opacity: 1,
			border: '1px solid #f97316',
			borderRadius: '9999px%',
			backgroundColor: '#f97316',
			backdropFilter: 'blur(5px)',
		})
		tl.to('.cursor', { scale: 2, duration: 3, ease: 'power3.out' })
		tl.to('.cursor', {
			backgroundColor: 'transparent',
			scale: 1,
			duration: 1,
			ease: 'power3.inOut',
		})

		const xTo = gsap.quickTo('.cursor', 'x', { duration: 0.5, ease: 'power3' }),
			yTo = gsap.quickTo('.cursor', 'y', { duration: 0.5, ease: 'power3' })

		const followCursor = contextSafe!((e: MouseEvent) => {
			xTo(e.clientX - cursorSize / 2)
			yTo(e.clientY - cursorSize / 1.5)
		})

		return () => window.removeEventListener('mousemove', followCursor)
	})

	return (
		<div
			className='cursor hidden lg:block fixed z-[1000] pointer-events-none'
			style={{ height: cursorSize, width: cursorSize }}>
			<span className='cursor-text text-sm whitespace-nowrap'>{text}</span>
		</div>
	)
}
