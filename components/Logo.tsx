import Image from 'next/image'

function Logo() {
	return (
		<button onClick={() => window.scrollTo(0, 0)}>
			<Image src='./assets/images/mono-logo.svg' alt='logo' width={40} height={40} />
		</button>
	)
}

export default Logo
