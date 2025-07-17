import ThemeToggle from '@/components/Theme/ThemeToggle'
import { ThemeContext } from '@/contexts/ThemeContext'
import { routes } from '@/router/router'

import { NavLink } from 'react-router'

const ThemeNavbar = () => {
	const themeRoute = routes[1]
	const children = themeRoute?.children || []
	return (
		<div className="flex items-center gap-8 py-4">
			<ul className="flex gap-4 py-4">
				{children.map((child, i) => (
					<li key={i}>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'theme-active-link menu-link' : 'menu-link'
							}
							to={child.path}
							end
						>
							{child.handle?.title}
						</NavLink>
					</li>
				))}
			</ul>
			<ThemeToggle />
		</div>
	)
}

export default ThemeNavbar
