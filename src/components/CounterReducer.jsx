import { useReducer } from 'react'

function counterReducer(currentState, action) {
	switch (action.type) {
		case 'increment':
			return { count: currentState.count + 1 }
		case 'decrement':
			return { count: currentState.count - 1 }
		case 'reset':
			return { count: action.payload }
		default:
			throw new Error()
	}
}

const CounterReducer = () => {
	const [state, dispatch] = useReducer(counterReducer, { count: 0 })

	return (
		<div className="max-w-md mx-auto my-10 bg-white shadow-md rounded-lg p-6 text-center space-y-6">
			<h1 className="text-2xl font-semibold text-gray-800">
				Test Counter Reducer
			</h1>

			<div className="text-3xl font-bold text-blue-600">
				Count: {state.count}
			</div>

			<div className="flex justify-center gap-4">
				<button
					onClick={() => dispatch({ type: 'increment' })}
					className="button-reducer bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-200"
				>
					+
				</button>

				<button
					onClick={() => dispatch({ type: 'decrement' })}
					className="button-reducer bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-200"
				>
					-
				</button>

				<button
					onClick={() => dispatch({ type: 'reset', payload: 0 })}
					className="button-reducer bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-200"
				>
					Reset
				</button>
			</div>
		</div>
	)
}

export default CounterReducer
