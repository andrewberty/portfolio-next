import { IconType } from 'react-icons'
import { StaticImageData } from 'next/image'

export type Project = {
	title: string
	description: string
	techs: IconType[]
	repoLink?: string
	demo: string
	liveLink?: string
	marketplace?: string
}

export type Blogpost = {
	id: number
	social_image: string
	url: string
	reading_time_minutes: string
	tag_list: string[]
	title: string
}

export type Skill = {
	category: string
	skills: StaticImageData[]
}
