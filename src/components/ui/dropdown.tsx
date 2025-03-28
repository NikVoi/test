import { observer } from 'mobx-react-lite'
import { IoIosClose } from 'react-icons/io'
import { MdArrowDropDown } from 'react-icons/md'
import { useDropdown } from '../../hooks/useDropdown'
import { Coin } from '../../types/types'
import Button from './button'
import Input from './input'

export const Dropdown = observer(
	({
		selectedCurrency,
		onCurrencyChange,
		coins,
	}: {
		selectedCurrency: number
		onCurrencyChange: (id: number) => void
		coins: Coin[]
	}) => {
		const {
			isOpen,
			setIsOpen,
			searchQuery,
			setSearchQuery,
			sortedCoins,
			dropdownRef,
			currentCurrency,
			handleSelection,
		} = useDropdown(coins, selectedCurrency, onCurrencyChange)

		const handleCoinSelection = (coinId: number) => {
			handleSelection(coinId)
			onCurrencyChange(coinId)
			setIsOpen(false)
		}

		return (
			<div className='w-full' ref={dropdownRef}>
				<Button
					onClick={() => setIsOpen(!isOpen)}
					className='px-2 text-lg text-white w-full flex justify-between items-center h-full bg-[#36324a] border-0'
				>
					{coins.find(coin => coin.id === currentCurrency)?.symbol || 'Select'}
					<MdArrowDropDown className='text-4xl' />
				</Button>
				{isOpen && (
					<div className='absolute left-0 top-0 w-full h-full bg-white border rounded-lg shadow-2xl p-4 z-50 text-black'>
						<div className='flex justify-between items-center mb-2'>
							<h2>Select a currency</h2>
							<Button
								className='text-4xl bg-white border-0 p-0'
								onClick={() => setIsOpen(false)}
							>
								<IoIosClose className='text-black' />
							</Button>
						</div>
						<Input
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
							placeholder='Search by symbol or name'
						/>
						<div className='max-h-60 overflow-y-auto'>
							{sortedCoins.length > 0 ? (
								sortedCoins.map(coin => (
									<div
										key={coin.id}
										onClick={() => handleCoinSelection(coin.id)}
										className={`p-2 hover:bg-gray-200 cursor-pointer rounded-md text-black ${
											coin.id === currentCurrency ? 'bg-gray-300 font-bold' : ''
										}`}
									>
										{coin.symbol}
									</div>
								))
							) : (
								<p className='text-gray-500 text-center'>No results found</p>
							)}
						</div>
					</div>
				)}
			</div>
		)
	}
)
