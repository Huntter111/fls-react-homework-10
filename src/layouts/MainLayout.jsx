import MainNavbar from '@/layouts/MainNavbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
	return (
		<div>
			<MainNavbar />
			<Outlet />
		</div>
	)
}

export default MainLayout
