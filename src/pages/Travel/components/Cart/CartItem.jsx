import { CartActionContext } from '@/contexts/CartContext'
import { CART_ACTION_TYPES } from '@/providers/cartActionsType'
import { useContext } from 'react'

const CartItem = ({ item, type }) => {
	const dispatch = useContext(CartActionContext)
	function handleRemove() {
		dispatch({
			type:
				type === 'bus'
					? CART_ACTION_TYPES.DELETE_BUS
					: CART_ACTION_TYPES.DELETE_HOTEL,
			payload: item.id,
		})
	}
	return (
		<div className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
			<div className="w-40 h-32 flex-shrink-0 overflow-hidden rounded-lg">
				<img
					src={item?.image}
					alt={item?.name}
					className="object-cover w-full h-full"
				/>
			</div>

			<div className="flex flex-col justify-between flex-grow text-center sm:text-left">
				<h2 className="text-lg font-semibold text-gray-800 mb-1">
					{item?.name}
				</h2>
				<p className="text-sm text-gray-600">{item?.description}</p>
				{type !== 'bus' ? (
					<p className="text-lg font-bold text-blue-600">
						Ціна за добу: {item?.pricePerNight}$
					</p>
				) : (
					<p className="text-lg font-bold text-blue-600">
						Ціна квитка: {item?.pricePerTicket} грн.
					</p>
				)}
			</div>

			{/* Кнопка */}
			<div className="flex">
				<button
					onClick={handleRemove}
					className="w-full content-between  bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 hover:cursor-pointer active:scale-95 transition-all"
				>
					Remove
				</button>
			</div>
		</div>
	)
}

export default CartItem
