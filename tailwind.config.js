/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'mauve': '#A08083',
                'green-dark': '#172A20',
                'green-hero': '#1C2920',
                'pink-light': '#E2CAD9',
                'ink': '#221E16',
            },
            fontFamily: {
                'sans': ['DM Sans', 'sans-serif'],
                'serif': ['Playfair Display', 'serif'],
            },
            boxShadow: {
                'soft': '0 10px 22px rgba(16,30,30,.07)',
                'card': '0 8px 18px rgba(0,0,0,.06)',
                'project': '0 10px 24px rgba(16,30,30,.09)',
                'modal': '0 12px 36px rgba(0, 0, 0, 0.25)',
            },
            backdropBlur: {
                'xs': '2px',
            }
        },
    },
    plugins: [],
}
