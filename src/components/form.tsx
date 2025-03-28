import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { store } from '../store/exchangeStore'
import CurrencyInfo from './currencyInfo'
import CurrencyItem from './currencyItem'
import Button from './ui/button'
import ButtonNav from './ui/buttonNav'

const Form = observer(() => {
	useEffect(() => {
		store.loadCoins()
	}, [])

	const reverseCurrencies = () => {
		const temp = store.fromCoinId
		store.setFromCoinId(store.toCoinId)
		store.setToCoinId(temp)
	}

	return (
		<section className=' flex flex-col bg-[#343443] overflow-hidden rounded-2xl'>
			<div className='flex'>
				<ButtonNav className='border-r-0 rounded-tl-2xl border-b-0'>
					Exchange Crypto
				</ButtonNav>
				<ButtonNav className='rounded-tr-2xl  '>
					<span className='opacity-50 '>Buy / Sell Crypto 💳</span>
				</ButtonNav>
			</div>

			<div className='flex flex-col p-4 border-l border-r border-b border-solid border-[#46475E] rounded-b-2xl'>
				<CurrencyItem label='You send' />
				<CurrencyInfo reverseCurrencies={reverseCurrencies} />
				<CurrencyItem label='You get' isReceiving />
				<Button className='mt-5'>
					{store.loading ? 'Processing...' : 'Exchange'}
				</Button>
			</div>
		</section>
	)
})

export default Form
