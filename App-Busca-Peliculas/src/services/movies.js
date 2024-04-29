import { url } from '../constants/api'

export function searchMovies({ search }) {
	if (search === '') return null

	//* Async Await
	// try {
	// 	const response = await fetch(url(search))
	// 	const json = await response.json()

	// 	const movies = json.Search
	// 	return movies?.map((movie) => ({
	// 		id: movie.imdbID,
	// 		title: movie.Title,
	// 		year: movie.Year,
	// 		poster: movie.Poster,
	// 	}))
	// } catch (e) {
	// 	throw new Error('Error Searching Movies')
	// }

	//* Promesas
	return fetch(url(search))
		.then((response) => response.json())
		.then((json) => {
			const movies = json.Search
			return movies?.map((movie) => ({
				id: movie.imdbID,
				title: movie.Title,
				year: movie.Year,
				poster: movie.Poster,
			}))
		})
		.catch(() => {
			throw new Error('Error Searching Movies')
		})
}
