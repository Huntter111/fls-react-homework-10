import MainLayout from '@/layouts/MainLayout'
import ThemeLayout from '@/layouts/ThemeLayout'
import TravelPlaning from '@/layouts/TravelPlaning'
import Home from '@/pages/Home'
import ThemeAbout from '@/pages/Theme/ThemeAbout'
import ThemeContacts from '@/pages/Theme/ThemeContacts'
import ThemeHome from '@/pages/Theme/ThemeHome'
import TravelBuses from '@/pages/Travel/TravelBuses'
import TravelCart from '@/pages/Travel/TravelCart'
import TravelHome from '@/pages/Travel/TravelHome'
import TravelHotel from '@/pages/Travel/TravelHotel'
import frontRoutes from '@/router/frontRoutes'
import { createBrowserRouter } from 'react-router'

export const routes = [
	{
		Component: MainLayout,
		children: [
			{
				path: frontRoutes.pages.home,
				Component: Home,
			},
		],
	},
	{
		Component: ThemeLayout,
		children: [
			{
				path: frontRoutes.pages.theme.index,
				Component: ThemeHome,
				handle: {
					title: 'Home',
				},
			},
			{
				path: frontRoutes.pages.theme.about,
				Component: ThemeAbout,
				handle: {
					title: 'About',
				},
			},
			{
				path: frontRoutes.pages.theme.contacts,
				Component: ThemeContacts,
				handle: {
					title: 'Contacts',
				},
			},
		],
	},
	{
		path: frontRoutes.pages.travel.index,
		Component: TravelPlaning,
		children: [
			{
				index: true,
				Component: TravelHome,
				handle: {
					title: 'Home',
				},
			},
			{
				path: frontRoutes.pages.travel.hotel,
				Component: TravelHotel,
				handle: {
					title: 'Hotel',
				},
			},
			{
				path: frontRoutes.pages.travel.buses,
				Component: TravelBuses,
				handle: {
					title: 'Busses',
				},
			},
			{
				path: frontRoutes.pages.travel.cart,
				Component: TravelCart,
				handle: {
					title: 'Cart',
				},
			},
		],
	},
]

const router = createBrowserRouter(routes)
export default router
