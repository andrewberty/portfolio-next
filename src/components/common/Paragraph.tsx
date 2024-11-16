import { cn } from '@/src/utils/cn'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useRef, useState } from 'react'

export default function Paragraph({ children, className }: { children: string; className?: string }) {
	const [wordsIndex, setwordsIndex] = useState(0)
	const target = useRef(null)
	const wordsAtOnce = 3

	const { scrollYProgress } = useScroll({
		target: target,
		offset: ['start start', 'end 150%'],
	})

	useMotionValueEvent(scrollYProgress, 'change', latest => {
		setwordsIndex(Math.round(latest * words.length))
	})

	const words = children.split(' ')
	// const joinedWords = joinWordsFromArray(words)

	return (
		<motion.div ref={target} className='h-[120%]'>
			<div className={cn('flex flex-wrap', className)}>
				{words.map((word, index) => (
					<motion.span
						key={index}
						initial={{ opacity: 0, filter: 'blur(5px)' }}
						animate={{
							opacity:
								index + 1 <= wordsIndex && index + wordsAtOnce >= wordsIndex
									? 1
									: (scrollYProgress.get() / words.length) * 20,
							filter: index + 1 <= wordsIndex && index + wordsAtOnce >= wordsIndex ? 'blur(0px)' : 'blur(5px)',
						}}
						className={cn('mr-3 text-orange-400 text-center font-thin', {
							'font-medium': index + 1 <= wordsIndex && index + wordsAtOnce >= wordsIndex,
						})}>
						{word}
					</motion.span>
				))}
			</div>
		</motion.div>
	)
}
