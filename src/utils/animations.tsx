export const variantKeys = (whileInView = false, amount = 0.4) => {
	if (whileInView)
		return {
			initial: 'hidden',
			whileInView: 'shown',
			viewport: {
				once: true,
				amount: amount,
			},
		}
	return {
		initial: 'hidden',
		animate: 'shown',
	}
}

export const container = (staggerDuration = 0.5) => {
	return {
		hidden: {
			opacity: 0,
		},
		shown: {
			opacity: 1,
			transition: {
				staggerChildren: staggerDuration,
			},
		},
	}
}

export const xAnimation = xValue => {
	return {
		hidden: {
			x: xValue,
			opacity: 0,
		},
		shown: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	}
}

export const LeftAnimation = leftValue => {
	return {
		hidden: {
			left: leftValue,
			opacity: 0,
		},
		shown: {
			left: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	}
}

export const yAnimation = yValue => {
	return {
		hidden: {
			y: yValue,
			opacity: 0,
		},
		shown: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	}
}

export const xPositionAnimation = xValue => {
	return {
		hidden: {
			end: xValue,
			opacity: 0,
		},
		shown: {
			end: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	}
}
