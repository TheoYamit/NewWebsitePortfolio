/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'project-blue': '#6499E9',
                'progress-green': '#91C788',
                'contact-orange': '#FF9D23'
            }
        },
        fontFamily: {
            'sans': ['proximaReg', 'system-ui', '-apple-system', 'sans-serif'],
            'proximaReg': ['proximaReg', 'sans-serif'],
            'proximaBold': ['proximaBold', 'sans-serif']
        }
    },
    plugins: [],
}

