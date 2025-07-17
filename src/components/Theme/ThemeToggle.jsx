import { ThemeContext } from '@/contexts/ThemeContext'
import { useContext } from 'react'

const ThemeToggle = () => {
	const { theme, handleChangeTheme } = useContext(ThemeContext)
	return (
		<div>
			<button
				className="text-4xl hover:cursor-pointer hover:scale-[105%] transition-all"
				onClick={handleChangeTheme}
			>
				{theme === 'light' ? '☀️' : '🌙'}
			</button>
		</div>
	)
}

export default ThemeToggle
