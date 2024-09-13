import { cn } from '@/src/utils/cn'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'

function joinWordsFromArray(words: string[], number = 5) {
	let result: string[] = []

	words.forEach((_, i) => {
		if (i % number === 0) {
			result.push(words.slice(i, i + number).join(' '))
		}
	})
	return result
}

export default function Paragraph({ children, className }: { children: string; className?: string }) {
	const [wordsIndex, setwordsIndex] = useState(0)
	const target = useRef(null)
	const { scrollYProgress } = useScroll({
		target: target,
		offset: ['start start', 'end 0.5'],
	})

	useMotionValueEvent(scrollYProgress, 'change', latest => {
		setwordsIndex(Math.round(latest * words.length))
	})

	const words = children.split(' ')
	const joinedWords = joinWordsFromArray(words)

	return (
		<motion.div ref={target} className='h-[200%]'>
			<div className={cn('flex flex-wrap', className)}>
				{joinedWords.map((word, index) => (
					<motion.span
						key={index}
						initial={{ opacity: 0 }}
						animate={{ opacity: index + 1 == wordsIndex ? 1 : (scrollYProgress.get() / joinedWords.length) * 20 }}
						className='mr-2 text-orange-400'>
						{word}
					</motion.span>
				))}
			</div>
		</motion.div>
	)
}
