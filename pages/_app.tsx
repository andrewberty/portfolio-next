import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DM_Serif_Text, IBM_Plex_Mono, Inter } from 'next/font/google'

const IBMPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['300', '500', '700'], variable: '--mono' })
const inter = Inter({ subsets: ['latin'], weight: ['300', '500', '700'], variable: '--sans' })
const DmSerif = DM_Serif_Text({ subsets: ['latin'], weight: ['400'], variable: '--serif' })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${IBMPlexMono.variable} ${inter.variable} ${DmSerif.variable} font-mono select-none`}>
			<Component {...pageProps} />
		</main>
	)
}
