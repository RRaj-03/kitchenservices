/** @type {import('tailwindcss').Config} */
import { screens as _screens } from 'tailwindcss/defaultTheme'
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    gridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',
    },
  },
  screens: {
    mobileBig: '500px',
    ..._screens
  },
}
export const plugins = []
