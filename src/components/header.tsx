const Header = () => {
	return (
		<section className='flex justify-between items-center uppercase font-bold max-md:mb-10'>
			<h1 className='text-4xl'>Crypto</h1>

			<button className='w-10 h-6 flex justify-center items-center relative cursor-pointer md:hidden'>
				<span
					className={`w-full h-1 bg-white rounded-2xl before:content-[''] before:w-full before:h-1 before:absolute before:bg-white before:rounded-2xl before:top-0 before:right-0
						after:content-[''] after:w-full after:h-1 after:absolute after:bg-white after:rounded-2xl after:bottom-0 after:right-0`}
				></span>
			</button>
		</section>
	)
}

export default Header
