import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import ProgressBar from '@/src/components/common/ProgressBar'
import ReactLenis from 'lenis/react'
import Cursor from '@/src/components/common/Cursor'
import { CursorProvider } from '../utils/hooks/useCursor'

export async function generateMetadata() {
	return {
		metadataBase: new URL(`${process.env.NEXT_WEBSITE_URL}`),
		title: 'andrew.',
		alternates: {
			canonical: './',
		},
		description: '',
		robots: {
			index: true,
			follow: true,
		},
		openGraph: {
			title: 'andrew.',
			description: '',
			siteName: 'andrew.',
			url: `${process.env.NEXT_WEBSITE_URL}`,
			type: 'website',
			images: [
				{
					url: `${process.env.NEXT_WEBSITE_URL}/assets/images/beard_logo.png`,
					width: 1200,
					height: 630,
					alt: 'Beard Logo',
					type: 'image/jpeg',
				},
			],
		},
		icons: {
			icon: '/icon.ico',
		},
	}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={`${GeistSans.variable} ${GeistMono.variable}  font-mono select-none`}>
			<head>
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
			</head>
			<body>
				<ReactLenis root>
					<div className='grain pointer-events-none' />
					{/* <Navbar /> */}
					<ProgressBar />
					<CursorProvider>
						<Cursor />
						{children}
					</CursorProvider>
				</ReactLenis>
			</body>
		</html>
	)
}
