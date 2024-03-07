const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
	//* usando async await
	// async function getRandomFact() {
	//   const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
	//   const json = await res.json()
	//   setFact(json.fact)
	// }

	//* usando promesas
	return fetch(CAT_ENDPOINT_RANDOM_FACT)
		.then((res) => res.json())
		.then((data) => {
			const { fact } = data
			return fact
		})
}

const CAT_ENDPOINT_IMAGE_URL = (firstThreeWords) =>
	`https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red`

export function getRandomFactImage(firstThreeWords) {
	return fetch(CAT_ENDPOINT_IMAGE_URL(firstThreeWords)).then((res) => {
		const url = res.url
		return url
	})
}
