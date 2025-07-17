import { ThemeContext } from '@/contexts/ThemeContext'
import { useContext } from 'react'

const Panel = ({ title, children }) => {
	const { theme } = useContext(ThemeContext)
	const themeStyle = 'panel-' + theme
	return (
		<div className={`${themeStyle} flex flex-col gap-4`}>
			<h1>{title}</h1>
			<div>{children}</div>
		</div>
	)
}

export default Panel
