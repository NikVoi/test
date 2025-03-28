import { observer } from 'mobx-react-lite'
import { store } from '../store/exchangeStore'
import { Dropdown } from './ui/dropdown'
import Loader from './ui/loader/loader'

const CurrencyItem = observer(
	({
		label,
		isReceiving = false,
	}: {
		label: string
		isReceiving?: boolean
	}) => {
		return (
			<div className='w-full border border-solid border-[#46475E]  bg-[#3e3e59] rounded-md flex'>
				<div className='relative px-5 pt-6  max-md:pt-5'>
					<label className='absolute top-0 left-5 opacity-50 max-md:text-xs'>
						{label}
					</label>
					{store.loading ? (
						<div className='w-[272px]'>
							<Loader />
						</div>
					) : (
						<input
							type='number'
							value={
								isReceiving ? store.convertedAmount.toFixed(6) : store.amount
							}
							className='text-2xl pb-1 focus:outline-none focus:border-transparent active:border-transparent'
							onChange={e => {
								if (!isReceiving) {
									const newValue = e.target.value
									if (newValue === '') {
										store.setAmount(0)
									} else {
										const parsedValue = parseFloat(newValue)
										if (!isNaN(parsedValue) && parsedValue >= 0) {
											store.setAmount(parsedValue)
										}
									}
								}
							}}
							disabled={isReceiving || store.loading}
						/>
					)}
				</div>
				<Dropdown
					selectedCurrency={isReceiving ? store.toCoinId : store.fromCoinId}
					onCurrencyChange={
						isReceiving
							? store.setToCoinId.bind(store)
							: store.setFromCoinId.bind(store)
					}
					coins={store.coins}
				/>
			</div>
		)
	}
)

export default CurrencyItem
