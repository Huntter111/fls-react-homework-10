import Panel from '@/components/Theme/Panel'

const ThemeContacts = () => {
	return (
		<div className="px-2 py-4 max-w-xl mx-auto text-center flex flex-col gap-4">
			<Panel>
				<h1 className="text-3xl font-bold mb-4">Контактна інформація</h1>
				<p className="mb-2">
					Ми завжди раді зворотному зв’язку! Якщо у вас є запитання або
					пропозиції, зв’яжіться з нами зручним для вас способом.
				</p>
			</Panel>
			<Panel>
				<p>
					<strong>Email:</strong> support@example.com
				</p>
				<p>
					<strong>Телефон:</strong> +380 (67) 123-45-67
				</p>
				<p>
					<strong>Адреса:</strong> вул. Прикладна, 12, Київ, Україна
				</p>
			</Panel>
		</div>
	)
}

export default ThemeContacts
