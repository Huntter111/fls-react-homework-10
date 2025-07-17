import { ThemeContext } from '@/contexts/ThemeContext'
import { useContext } from 'react'

const Button = ({ children }) => {
	const { theme } = useContext(ThemeContext)
	const buttonTheme = 'button-' + theme
	return <button className={buttonTheme}>{children}</button>
}

export default Button
