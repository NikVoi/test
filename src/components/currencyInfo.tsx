import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { HiOutlineSwitchVertical } from 'react-icons/hi'
import { store } from '../store/exchangeStore'
import { CurrencyInfoProps } from '../types/types'

const CurrencyInfo: FC<CurrencyInfoProps> = observer(
	({ reverseCurrencies }) => {
		return (
			<div className='flex items-center justify-between border-l border-solid border-[#3E3F57] ml-3 py-2'>
				<div className='pl-3 relative'>
					<h3 className='mb-2 before:content-[] before:absolute before:size-2 before:bg-[#3E3F57] before:-left-1 before:top-2 before:rounded-full'>
						No hidden fees
					</h3>
					<h3 className='before:content-[] before:absolute before:size-2 before:bg-[#3E3F57] before:-left-1 before:bottom-2 before:rounded-full'>
						{store.loading
							? 'Fetching rate...'
							: `1 ${store.coins.find(c => c.id === store.fromCoinId)?.symbol} 
						   ~ ${store.conversionRate.toFixed(6)} 
						   ${store.coins.find(c => c.id === store.toCoinId)?.symbol}`}
					</h3>
					{store.error && <p className='text-red-400'>{store.error}</p>}
				</div>

				<button
					className='bg-[#3E3F57] text-xl p-1 rounded-md text-green-400 cursor-pointer'
					onClick={reverseCurrencies}
				>
					<HiOutlineSwitchVertical />
				</button>
			</div>
		)
	}
)

export default CurrencyInfo
