import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchConversionRate = async (
	fromSymbol: number,
	toSymbol: number
) => {
	const response = await axios.get(
		`${API_BASE_URL}/conversion?from=${fromSymbol}&to=${toSymbol}`
	)

	if (response.status !== 200) {
		throw new Error('Failed to fetch conversion rate')
	}

	return response.data.rate
}
