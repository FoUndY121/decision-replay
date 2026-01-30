'use client'

const Dima = () => {
	const handleClick = () => {
		console.log('Dima component')
	}

	return (
		<div>
			<button className='bg-amber-400' onClick={handleClick}>
				btn
			</button>
		</div>
	)
}

export default Dima





