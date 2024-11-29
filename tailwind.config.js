/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'green-60': '#caff33',
            'green-65': '#d1ff4c',
            'green-70': '#d8ff66',
            'green-80': '#e5ff99',
            'green-90': '#f2ffcc',
            'green-95': '#f8ffe5',
            'green-97': '#fbfff0',
            'green-99': '#fefffa',

            'white-90': '#e4e4e7',
            'white-95': '#f1f1f3',
            'white-97': '#f7f7f8',
            'white-99': '#fcfcfd'
        },
        extend: {

        },
        fontFamily: {
            sans: ['Ubuntu', 'sans-serif'],
            serif: ['Playfair Display', 'serif'],
        },
    },
    plugins: [],
}