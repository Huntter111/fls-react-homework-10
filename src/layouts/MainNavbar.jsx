import { Link, NavLink } from 'react-router'
import logo from '../assets/react.svg'
const MainNavbar = () => {
	return (
		<nav className="flex items-center pb-8 border-b-1 border-b-black">
			<Link to="/" className="flex-grow">
				<img
					src={logo}
					className="hover:animate-spin hover:ease-in hover:duration-700"
					alt="Image"
				/>
			</Link>
			<ul className="flex gap-8">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? 'active-link menu-link' : 'menu-link'
					}
				>
					Home
				</NavLink>
				<NavLink
					to="/theme"
					className={({ isActive }) =>
						isActive ? 'active-link menu-link' : 'menu-link'
					}
				>
					Theme
				</NavLink>
				<NavLink
					to="/travel"
					className={({ isActive }) =>
						isActive ? 'active-link menu-link' : 'menu-link'
					}
				>
					Travel
				</NavLink>
			</ul>
		</nav>
	)
}

export default MainNavbar
