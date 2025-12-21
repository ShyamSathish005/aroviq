/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
        './components/**/*.{js,jsx,ts,tsx}',
        './theme.config.jsx'
    ],
    theme: {
        extend: {
            colors: {
                'aroviq-cyan': '#00f2ea',
                'aroviq-purple': '#7000ff',
                'bg-dark': '#0a0a0a',
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: 1, filter: 'brightness(1.2) drop-shadow(0 0 5px #00f2ea)' },
                    '50%': { opacity: 0.7, filter: 'brightness(1)' },
                }
            }
        },
    },
    plugins: [],
}
