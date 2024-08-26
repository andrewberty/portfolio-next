'use client'

import { Blogpost } from '@/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { revealFromLeft } from '../reveal/revealVariations'

function SingleBlogPost({ post }: { post: Blogpost }) {
	const { social_image, url, reading_time_minutes, tag_list, title } = post

	return (
		<motion.div variants={revealFromLeft} className='w-96 h-72 rounded-lg border border-white/40 overflow-hidden'>
			<Link href={url}>
				<div className='relative w-full h-4/6'>
					<Image src={social_image} alt={title} fill className='object-cover scale-110' />
				</div>
			</Link>

			<div className='h-2/6 space-y-2 flex flex-col justify-center px-4 text-sm'>
				<p className='my-1'>{reading_time_minutes} minutes</p>

				<div className='flex mb-1 overflow-x-auto space-x-2'>
					{tag_list.map((tag: string, index: number) => (
						<p
							key={index}
							className='px-2 py-1 capitalize backdrop-blur rounded bg-gradient-to-r from-purple-900 to-purple-600'>
							{tag}
						</p>
					))}
				</div>
			</div>
		</motion.div>
	)
}

export default SingleBlogPost
