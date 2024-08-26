import '@/styles/globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
	title: 'andrew.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={`${GeistSans.variable} ${GeistMono.variable}  font-mono select-none`}>
			<body>
				<div className='grain pointer-events-none' />
				{children}
			</body>
		</html>
	)
}
