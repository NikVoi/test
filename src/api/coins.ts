import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchCoins = async () => {
	const response = await axios.get(`${API_BASE_URL}/coins`)
	if (response.status !== 200) {
		throw new Error('Failed to fetch coins')
	}

	return response.data
}
