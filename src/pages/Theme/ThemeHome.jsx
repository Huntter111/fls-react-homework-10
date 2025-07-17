import Button from '@/components/Theme/Button'
import Panel from '@/components/Theme/Panel'

const ThemeHome = () => {
	return (
		<div className="flex flex-col gap-4">
			<Panel title="Задача 1.">
				Використовуючи context зробити можливість передачі теми у компоненти
				додатку (невеликий додаток з декількома сторінками і всередині сторінок
				читати значення теми).
			</Panel>
			<div>
				<Button>Click me</Button>
			</div>
		</div>
	)
}

export default ThemeHome
