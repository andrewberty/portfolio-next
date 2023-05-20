import Head from 'next/head'
import { Footer, Header, Main, Navbar } from '../components'

export default function Home() {
	return (
		<>
			<Head>
				<title>andrew.</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.svg' />
			</Head>
			<>
				<Navbar />
				<Header />
				<Main />
				<Footer />
			</>
		</>
	)
}
