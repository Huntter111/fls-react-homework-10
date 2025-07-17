import MainNavbar from '@/layouts/MainNavbar'
import TravelHeader from '@/layouts/TravelHeader'
import BussesProvider from '@/providers/BussesProvider'

import CartProvider from '@/providers/CartProvider'
import HotelProvider from '@/providers/HotelProvider'

import { Outlet } from 'react-router'

const TravelPlaning = () => {
	return (
		<div>
			<MainNavbar />
			<BussesProvider>
				<HotelProvider>
					<CartProvider>
						<TravelHeader />
						<Outlet />
					</CartProvider>
				</HotelProvider>
			</BussesProvider>
		</div>
	)
}

export default TravelPlaning
