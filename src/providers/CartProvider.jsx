import { CartActionContext, CartContext } from '@/contexts/CartContext'
import { CART_ACTION_TYPES } from '@/providers/cartActionsType'
import { useReducer } from 'react'

const initialCart = { busses: [], hotels: [] }

function cartReducer(state, action) {
	const id = action.payload
	switch (action.type) {
		case CART_ACTION_TYPES.ADD_BUS:
			if (!state.busses.includes(id)) {
				return { ...state, busses: [...state.busses, id] }
			}
			return state
		case CART_ACTION_TYPES.DELETE_BUS:
			return {
				...state,
				busses: state.busses.filter((el) => el !== id),
			}
		case CART_ACTION_TYPES.ADD_HOTEL:
			if (!state.hotels.includes(id)) {
				return {
					...state,
					hotels: [...state.hotels, id],
				}
			}
			return state
		case CART_ACTION_TYPES.DELETE_HOTEL:
			return { ...state, hotels: state.hotels.filter((el) => el !== id) }
		default:
			return state
	}
}
// Приклад action {type: "ADD", payload:id}
const CartProvider = ({ children }) => {
	const [cartState, dispatch] = useReducer(cartReducer, initialCart)

	return (
		<CartContext value={cartState}>
			<CartActionContext value={dispatch}>{children}</CartActionContext>
		</CartContext>
	)
}

export default CartProvider
