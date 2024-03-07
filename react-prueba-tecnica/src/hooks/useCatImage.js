import { useEffect, useState } from "react"
import { getRandomFactImage } from "../services/facts"

// para recuperar la imagen cada vez q tenemos una cita nueva
export function useCatImage({ fact }) {
	const [imageUrl, setImageUrl] = useState()

	useEffect(() => {
		if (!fact) return
		const firstThreeWords = fact.split(' ', 3).join(' ')
		getRandomFactImage(firstThreeWords).then(setImageUrl)
	}, [fact])

	return { imageUrl }
}