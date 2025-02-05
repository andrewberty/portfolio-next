'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import useCursor from '@/src/utils/hooks/useCursor'
import { cn } from '@/src/utils/cn'

export default function Cursor() {
	const cursorSize = 35

	const { text } = useCursor()

	useGSAP(
		(context, _) => {
			if (text) {
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

		tl.to('.cursor', { scale: 2, duration: 3, ease: 'power3.out' })
		tl.to('.cursor', {
			backgroundColor: 'transparent',
			scale: 0,
			duration: 1,
			ease: 'power3.inOut',
		})

		const xTo = gsap.quickTo('.cursor', 'x', { duration: 0.5, ease: 'power3' }),
			yTo = gsap.quickTo('.cursor', 'y', { duration: 0.5, ease: 'power3' })

		const followCursor = contextSafe!((e: MouseEvent) => {
			gsap.to('.cursor', { scale: 1, duration: 0, ease: 'power3.in' })

			xTo(e.clientX - cursorSize / 2)
			yTo(e.clientY - cursorSize / 1.5)
		})

		return () => window.removeEventListener('mousemove', followCursor)
	})

	return (
		<div
			className='cursor hidden lg:block fixed z-[1000] pointer-events-none scale-[100] translate-x-[50vw] translate-y-[50vh] border border-orange-500 rounded-full bg-orange-500 backdrop-blur-sm'
			style={{ height: cursorSize, width: cursorSize }}>
			<span
				className={cn('cursor-text text-sm whitespace-nowrap transition-opacity ease-in-out', {
					'opacity-0': !text,
				})}>
				{text}
			</span>
		</div>
	)
}
