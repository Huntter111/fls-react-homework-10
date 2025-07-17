import { CartContext } from '@/contexts/CartContext'
import { routes } from '@/router/router'
import { useContext } from 'react'
import { NavLink } from 'react-router'

const TravelPlaningNavbar = () => {
	const rootRoute = routes[2]
	const cartState = useContext(CartContext)
	const totalBussesAndHotelsNumber =
		cartState.hotels.length + cartState.busses.length

	return (
		<nav className="py-4">
			<ul className="flex gap-4 sm:gap-8">
				{rootRoute.children.map((r, index) => (
					<li key={index} className="relative text-[18px]">
						<NavLink
							className={({ isActive }) =>
								isActive ? 'travel-active-link menu-link' : 'menu-link'
							}
							to={r.path ?? ''}
							end
						>
							{r.handle?.title}
						</NavLink>
						{r.handle?.title === 'Cart' && totalBussesAndHotelsNumber > 0 && (
							<span className="top-3 font-bold text-white right-[-20px] flex items-center text-[14px] rounded-full w-[22px] h-[22px]  justify-center absolute  bg-orange-600">
								{totalBussesAndHotelsNumber}
							</span>
						)}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default TravelPlaningNavbar
