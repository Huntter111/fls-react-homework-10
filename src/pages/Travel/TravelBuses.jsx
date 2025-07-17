import { BussesContext } from '@/contexts/BussesContext'
import BussesList from '@/pages/Travel/components/Busses/BussesList'
import { useContext } from 'react'

const TravelBuses = () => {
	const busses = useContext(BussesContext)

	return (
		<div>
			<div className="flex flex-col gap-4 mb-8 ">
				<h2 className="text-2xl text-center font-bold">Busses</h2>
				<h3 className="text-xl text-center">Виберіть автобус для подорожі</h3>
			</div>
			<BussesList bussesList={busses} />
		</div>
	)
}

export default TravelBuses
