import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact() {
	const [fact, setFact] = useState()

	// para recuperar la cita al cargar la pagina
	//* esta es la forma con promesas de hacerlo
	const refreshRandomFact = () => {
		getRandomFact().then(setFact)
	}

	useEffect(refreshRandomFact, [])

	return { fact, refreshRandomFact}
}