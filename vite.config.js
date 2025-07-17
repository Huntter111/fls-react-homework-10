import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite' // в файл vite.config.js

// Додаємо в плагіни tailwind()
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': '/src', // Відносний шлях до src
		},
	},
})
