import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }) {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const previusSearch = useRef(search)

	const getMovies = useCallback(({ search }) => {
		if (previusSearch.current === search) return
		setLoading(true)
		setError(null)
		previusSearch.current = search
		searchMovies({ search })
			.then((newMovies) => setMovies(newMovies))
			.catch((e) => {
				setError(e.message)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])

	// const sortedMovies = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies

	const sortedMovies = useMemo(() => {
		return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
	}, [sort, movies])

	return { movies: sortedMovies, getMovies, loading, error }
}
