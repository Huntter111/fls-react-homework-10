import { BussesContext } from '@/contexts/BussesContext'
import { CartContext } from '@/contexts/CartContext'
import { HotelContext } from '@/contexts/HotelContext'
import CartList from '@/pages/Travel/components/Cart/CartList'

import { useContext } from 'react'

const TravelCart = () => {
	const cartState = useContext(CartContext)
	const hotels = useContext(HotelContext)
	const busses = useContext(BussesContext)
	const selectedHotels = hotels.filter((hotel) =>
		cartState.hotels.includes(hotel.id),
	)
	const selectedBusses = busses.filter((bus) =>
		cartState.busses.includes(bus.id),
	)
	return (
		<div>
			<div>
				<h2 className="text-xl font-semibold my-4">Вибрані готелі: </h2>
				<CartList items={selectedHotels} type="hotel" />
			</div>
			<div>
				<h2 className="text-xl font-semibold my-4">Вибрані автобуси: </h2>
				<CartList items={selectedBusses} type="bus" />
			</div>
		</div>
	)
}

export default TravelCart
