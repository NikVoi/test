import { useEffect, useRef, useState } from 'react'
import { Coin } from '../types/types'

export const useDropdown = (
	coins: Coin[],
	selectedCurrency: number,
	onCurrencyChange: (id: number) => void
) => {
	const [isOpen, setIsOpen] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')
	const [currentCurrency, setCurrentCurrency] = useState(selectedCurrency)
	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setCurrentCurrency(selectedCurrency)
	}, [selectedCurrency])

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const filteredCoins = coins.filter(
		coin =>
			(coin.symbol?.toLowerCase() ?? '').includes(searchQuery.toLowerCase()) ||
			(coin.name?.toLowerCase() ?? '').includes(searchQuery.toLowerCase())
	)

	const sortedCoins = filteredCoins.sort((a, b) =>
		a.symbol.localeCompare(b.symbol)
	)

	const handleSelection = (id: number) => {
		setCurrentCurrency(id)
		onCurrencyChange(id)
		setIsOpen(false)
	}

	return {
		isOpen,
		setIsOpen,
		searchQuery,
		setSearchQuery,
		sortedCoins,
		dropdownRef,
		currentCurrency,
		handleSelection,
	}
}
