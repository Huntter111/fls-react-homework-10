import { RouterProvider } from 'react-router'
import './App.css'
import router from './router/router'

import ThemeProvider from '@/providers/ThemeProvider'

function App() {
	return (
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default App
