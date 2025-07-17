import { CartActionContext, CartContext } from '@/contexts/CartContext'
import { CART_ACTION_TYPES } from '@/providers/cartActionsType'
import { useContext } from 'react'

const BussesItem = ({ bus }) => {
	const cartState = useContext(CartContext)
	const dispatch = useContext(CartActionContext)

	const isSelected = cartState.busses.includes(bus.id)

	function onSelect(id) {
		if (isSelected) {
			dispatch({ type: CART_ACTION_TYPES.DELETE_BUS, payload: id })
		} else {
			dispatch({ type: CART_ACTION_TYPES.ADD_BUS, payload: id })
		}
	}
	return (
		<div className=" bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
			{/* Зображення */}
			<div className="h-56 w-full overflow-hidden">
				<img
					src={bus.image}
					alt={bus.name}
					className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
				/>
			</div>

			{/* Контент */}
			<div className="p-4 flex flex-col flex-grow space-y-2">
				<h2 className="text-xl font-bold text-gray-800 flex-grow">
					{bus.name}
				</h2>
				<p className="text-gray-500 text-sm">{bus.description}</p>

				<div className="text-sm text-gray-700">
					<span className="font-medium">Маршрут:</span> {bus.location}
				</div>

				<div className="text-sm text-gray-700">
					<span className="font-medium">Ціна квитка:</span>{' '}
					<span className="text-green-600 font-semibold">
						{bus.pricePerTicket}₴
					</span>
				</div>

				<div className="text-yellow-500 text-sm">
					⭐ {bus.rating} зірок ({bus.numberOfReviews} відгуків)
				</div>

				<div className="text-sm text-gray-600">
					<span className="font-medium">Зручності:</span>{' '}
					{bus.amenities.join(', ')}
				</div>
				<div className="mt-4">
					<button
						onClick={() => onSelect(bus.id)}
						className={`w-full text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:cursor-pointer active:scale-95 transition-all duration-300 ${
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

export default BussesItem
