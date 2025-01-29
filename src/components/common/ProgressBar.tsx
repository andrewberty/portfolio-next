'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function ProgressBar() {
	const progressRef = useRef(null)

	useGSAP(() => {
		gsap.to(progressRef.current, {
			scrollTrigger: {
				trigger: 'body',
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
			},
			width: '100%',
		})
	})

	return (
		<div ref={progressRef} className='fixed top-0 h-1 drop-shadow-[0_10px_10px_rgb(249,115,22)] bg-orange-500 z-50' />
	)
}
