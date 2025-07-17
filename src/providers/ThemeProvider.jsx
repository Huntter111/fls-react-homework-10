import { ThemeContext } from '@/contexts/ThemeContext'
import { useCallback, useMemo, useState } from 'react'

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('dark')
	const handleChangeTheme = useCallback(() => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
	}, [])
	const themeContextValue = useMemo(
		() => ({ theme, handleChangeTheme }),
		[theme, handleChangeTheme],
	)
	return <ThemeContext value={themeContextValue}>{children}</ThemeContext>
}

export default ThemeProvider
