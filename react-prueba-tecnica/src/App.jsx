import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'



export function App() {
	const { fact, refreshRandomFact } = useCatFact()
	const { imageUrl } = useCatImage({ fact })

	//* esta es la forma async await de hacerlo
	const handleClick = () => {
		refreshRandomFact()
	}

	return (
		<main className='contenedor'>
			<h1 className='titulo'>App de Gatitos</h1>
			<button
				className='boton'
				onClick={handleClick}
			>
				Get new fact
			</button>
			<div className='grid grid-cols-2 place-items-center'>
				{fact && <p className='texto'>{fact}</p>}
				{imageUrl && (
					<img
						className='imagen'
						src={imageUrl}
						alt='Image extracted using the first three words'
					></img>
				)}
			</div>
		</main>
	)
}
