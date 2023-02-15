/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx", "./public/index.html"],
    theme: {
        extend: {
            fontSize: {
                tiny: "11px",
            },
            colors: {
                dark: {
                    900: "#1D2025",
                    800: "#292C33",
                    700: "#404348",
                    600: "#8B8C8C",
                },
            },
        },
    },
    plugins: [],
};
