import CartItem from '@/pages/Travel/components/Cart/CartItem'

const CartList = ({ items, type }) => {
	if (items.length === 0) {
		return <p>Немає вибраних {type === 'bus' ? 'автобусів' : 'готелів'}.</p>
	}
	return (
		<div className="grid gap-4">
			{items.map((item) => (
				<CartItem key={item.id} item={item} type={type} />
			))}
		</div>
	)
}

export default CartList
