import { Blogpost } from '@/types'
import { useEffect, useState } from 'react'
import { SingleBlogPost } from '..'
import RevealContainer from '../reveal/RevealContainer'

function BlogPosts() {
	const [blogposts, setBlogposts] = useState([])

	useEffect(() => {
		;(async function getBlogposts() {
			const res = await fetch('https://dev.to/api/articles?username=andrewgeorge')
			const posts = await res.json()
			setBlogposts(posts)
		})()
	}, [])

	return (
		<RevealContainer className='flex justify-center items-center flex-wrap w-4/5 mx-auto my-40 gap-7'>
			{blogposts && blogposts.map((post: Blogpost) => <SingleBlogPost post={post} key={post.id} />)}
		</RevealContainer>
	)
}

export default BlogPosts
