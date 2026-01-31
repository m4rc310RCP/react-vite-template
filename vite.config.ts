import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import * as path from 'path'
import dotenv from 'dotenv';

dotenv.config();

const rootPath = './src/v1'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
	 resolve: {
		alias: {
			"@presentation": path.resolve(__dirname, rootPath, `@presentation`),
			"@core": path.resolve(__dirname, rootPath, `@core`),
		}
	 }
})
