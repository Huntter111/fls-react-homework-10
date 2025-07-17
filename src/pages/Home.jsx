import CounterReducer from '@/components/CounterReducer'
import FormReducer from '@/components/FormReducer'

const Home = () => {
	return (
		<div className="py-8">
			Main Home Page
			<CounterReducer />
			<hr />
			<FormReducer />
		</div>
	)
}

export default Home
