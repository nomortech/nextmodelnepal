import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: "#141414",
      secondary: "#EADECE",
      textPrimary: "#EDE5D8",
      tertiary: "#AE9775"
    },
    extend: {
  
    },
  },
  plugins: [],
}
export default config
