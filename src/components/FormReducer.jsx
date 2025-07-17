import { useReducer } from 'react'

const initialState = {
	name: '',
	age: '',
	experience: '',
	position: '',
}
const localStorageKey = 'user_options'
function getInitialState(storageKey) {
	if (localStorage.getItem(storageKey)) {
		return JSON.parse(localStorage.getItem(storageKey))
	}
	return initialState
}
function reducerForm(currentState, action) {
	let newState = currentState
	switch (action.type) {
		case 'changed_value':
			newState = {
				...currentState,
				[action.payload.name]: action.payload.value,
			}
			break
		case 'reset':
			newState = initialState
			break
	}
	return newState
}

const FormReducer = () => {
	const [state, dispatch] = useReducer(
		reducerForm,
		localStorageKey,
		getInitialState,
	)

	function handleInputChange(e) {
		const { name, value } = e.target
		dispatch({
			type: 'changed_value',
			payload: { name, value },
		})
	}

	function onSend(e) {
		e.preventDefault()
		localStorage.setItem(localStorageKey, JSON.stringify(state))
		dispatch({ type: 'reset' })
	}
	function onReset() {
		dispatch({ type: 'reset' })
	}
	const disabledButtonSend =
		state.name && state.age && state.experience && state.position
	const disabledButtonReset =
		state.name || state.age || state.experience || state.position
	return (
		<div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6 space-y-6">
			<h2 className="text-xl font-semibold text-gray-800">
				Приклад. Форма користувача
			</h2>

			<div className="space-y-4">
				<label className="block">
					<span className="text-gray-700">Ваше ім'я:</span>
					<input
						type="text"
						name="name"
						value={state.name}
						onChange={handleInputChange}
						className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
					/>
				</label>

				<label className="block">
					<span className="text-gray-700">Ваш вік:</span>
					<input
						type="number"
						name="age"
						value={state.age}
						onChange={handleInputChange}
						className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
					/>
				</label>

				<label className="block">
					<span className="text-gray-700">Ваш стаж роботи:</span>
					<input
						type="number"
						name="experience"
						value={state.experience}
						onChange={handleInputChange}
						className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
					/>
				</label>

				<label className="block">
					<span className="text-gray-700">Ваша посада:</span>
					<input
						type="text"
						name="position"
						value={state.position}
						onChange={handleInputChange}
						className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
					/>
				</label>

				<button
					onClick={onSend}
					disabled={!disabledButtonSend}
					className={`w-full py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition 
						${
							disabledButtonSend
								? ' bg-blue-600 hover:bg-blue-700'
								: 'bg-gray-400 cursor-not-allowed hover:bg-gray-400'
						}`}
				>
					Send
				</button>
				<button
					disabled={!disabledButtonReset}
					onClick={onReset}
					className={`w-full py-2 px-4 rounded-md text-white font-medium transition 
						${
							disabledButtonReset
								? 'bg-blue-600 hover:bg-blue-700'
								: 'bg-gray-400 cursor-not-allowed'
						}`}
				>
					Reset
				</button>
			</div>

			<p className="text-gray-700">
				👋 Привіт, <span className="font-medium">{state.name || '...'}</span>.
				Тобі <span className="font-medium">{state.age || '...'}</span> років.
				Стаж: {state.experience || '...'} років. Посада:{' '}
				{state.position || '...'}
			</p>
		</div>
	)
}

export default FormReducer
