// src/hooks/useCrypto.ts
import { useEffect } from 'react'
import { store } from '../store/exchangeStore'
import { useDebounce } from './useDebounce'

export const useCrypto = () => {
	const debouncedAmount = useDebounce(store.amount, 200)

	useEffect(() => {
		if (store.coins.length === 0) {
			store.loadCoins()
		}
	}, [])

	useEffect(() => {
		store.updateConversionRate()
	}, [store.fromCoinId, store.toCoinId, debouncedAmount])

	return {
		store,
		setAmount: store.setAmount,
		setFromCurrencyId: store.setFromCoinId,
		setToCurrencyId: store.setToCoinId,
	}
}
