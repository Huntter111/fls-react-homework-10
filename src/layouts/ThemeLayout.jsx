import { ThemeContext } from '@/contexts/ThemeContext'
import MainNavbar from '@/layouts/MainNavbar'
import ThemeNavbar from '@/layouts/ThemeNavbar'
import { useContext } from 'react'

import { Outlet } from 'react-router'

const ThemeLayout = () => {
	const { theme } = useContext(ThemeContext)
	const ThemeStyles = 'body-' + theme
	return (
		<div className="">
			<MainNavbar />
			{/*  */}

			<div className={ThemeStyles}>
				<ThemeNavbar />
				<Outlet />
			</div>
		</div>
	)
}

export default ThemeLayout
