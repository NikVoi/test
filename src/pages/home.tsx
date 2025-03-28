import Form from '../components/form'
import Header from '../components/header'
import Info from '../components/info'

const HomePage = () => {
	return (
		<main>
			<Header />

			<div className='wrapper'>
				<Info />
				<Form />
			</div>
		</main>
	)
}

export default HomePage
