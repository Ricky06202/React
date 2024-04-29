import { useCallback, useRef, useState } from 'react'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useEffect } from 'react'
import debounce from 'just-debounce-it'

function useSearch() {
	const [search, updateSearch] = useState('')
	const [error, setError] = useState(null)
	const isFirstInput = useRef(true)

	useEffect(() => {
		if (isFirstInput.current) {
			isFirstInput.current = search === ''
			return
		}
		if (search === '') {
			setError('No se puede buscar una pelicula vacia')
			return
		}
		if (search.match(/^\d+$/)) {
			setError('No se puede buscar una pelicula con un numero')
			return
		}
		if (search.length < 3) {
			setError('La busqueda debe tener al menos 3 caracteres')
			return
		}
		setError(null)
	}, [search])

	return {
		search,
		updateSearch,
		error,
	}
}

export default function App() {
	const [sort, setSort] = useState(false)

	const { search, updateSearch, error } = useSearch()
	const { movies, getMovies, loading } = useMovies({ search, sort })

	const debouncedGetMovies = useCallback(
		debounce(search => {
			getMovies(search)
		}, 300),
		[getMovies]
	)

	function handleSubmit(event) {
		event.preventDefault()
		getMovies(search)
	}

	function handleSort() {
		setSort(!sort)
	}

	function handleChange(event) {
		const newSearch = event.target.value
		updateSearch(newSearch)
		debouncedGetMovies({ search: newSearch })
	}

	return (
		<div className='page'>
			<header>
				<h1>Buscador de Peliculas</h1>
				<form
					className='form'
					onSubmit={handleSubmit}
				>
					<input
						style={{
							border: '1px solid transparent',
							borderColor: error ? 'red' : 'transparent',
						}}
						value={search}
						onChange={handleChange}
						name='query'
						placeholder='Advengers, Star Wars, The Matrix...'
					/>
					<input
						type='checkbox'
						onChange={handleSort}
						checked={sort}
					/>
					<button>Buscar</button>
				</form>
				{error && <p style={{ color: 'red' }}> {error} </p>}
			</header>

			<main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
		</div>
	)
}
