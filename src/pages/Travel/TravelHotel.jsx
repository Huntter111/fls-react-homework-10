import { HotelContext } from '@/contexts/HotelContext'
import HotelList from '@/pages/Travel/components/Hotel/HotelList'

import { useContext } from 'react'

const TravelHotel = () => {
	const hotels = useContext(HotelContext)

	return (
		<div>
			<div className="flex flex-col gap-4 mb-8 ">
				<h2 className="text-2xl text-center font-bold">Hotels</h2>
				<h3 className="text-xl text-center">Виберіть готель для проживання</h3>
			</div>
			<div>
				<HotelList hotelList={hotels} />
			</div>
		</div>
	)
}

export default TravelHotel
