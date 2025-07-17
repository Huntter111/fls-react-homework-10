import { CartActionContext, CartContext } from '@/contexts/CartContext'
import { CART_ACTION_TYPES } from '@/providers/cartActionsType'
import { useContext } from 'react'

const HotelItem = ({ hotel }) => {
	const {
		id,
		name,
		description,
		image,
		location,
		pricePerNight,
		rating,
		numberOfReviews,
		amenities,
	} = hotel

	const cartState = useContext(CartContext)
	const dispatch = useContext(CartActionContext)

	const isSelected = cartState.hotels.includes(id)

	function onSelect(id) {
		if (isSelected) {
			dispatch({
				type: CART_ACTION_TYPES.DELETE_HOTEL,
				payload: id,
			})
		} else {
			dispatch({
				type: CART_ACTION_TYPES.ADD_HOTEL,
				payload: id,
			})
		}
	}
	return (
		<div className=" bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
			<div className="w-full h-60 overflow-hidden">
				<img
					src={image}
					alt={name}
					className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
				/>
			</div>

			<div className="p-4 flex flex-col flex-grow">
				<h2 className="text-xl font-semibold text-gray-800 flex-grow">
					{name}
				</h2>

				<p className="text-gray-600 text-sm flex-grow">{description}</p>

				<div className="space-y-1 pt-2">
					<p className="text-lg font-bold text-blue-600">
						Ціна за добу: {pricePerNight}$
					</p>
					<p className="text-gray-700">📍 {location}</p>
					<p className="text-yellow-500">
						⭐ {rating} зірок ({numberOfReviews} відгуків)
					</p>
					<p className="text-sm text-gray-500">
						Зручності:{' '}
						<span className="text-gray-700">{amenities.join(', ')}</span>
					</p>
				</div>
				<div className="mt-4">
					<button
						onClick={() => onSelect(id)}
						className={`w-full text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:cursor-pointer active:scale-95 transition-all duration-5 ${
							isSelected
								? 'bg-red-600 hover:bg-red-800 '
								: 'bg-blue-600 hover:bg-blue-800 '
						}`}
					>
						{isSelected ? 'Видалити ' : 'Додати в кошик'}
					</button>
				</div>
			</div>
		</div>
	)
}

export default HotelItem
