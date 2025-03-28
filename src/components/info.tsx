import Button from './ui/button'

const Info = () => {
	return (
		<section className='w-[350px] max-md:w-full max-md:px-4 max-md:mb-4'>
			<h2 className='text-4xl font-bold mb-4 max-md:text-3xl'>
				Limitless Web3.0 Crypto Exchange
			</h2>
			<h3 className='text-2xl mb-4 text-[#5c5780] max-md:w-[300px] max-md:text-xl'>
				Buy, Sell, and Swap Crypto: Simple, Fast, Free of Custody
			</h3>

			<Button className='bg-[#242424] border-white hover:text-green-400 max-md:hidden'>
				Get recommended Wallet
			</Button>
		</section>
	)
}

export default Info
