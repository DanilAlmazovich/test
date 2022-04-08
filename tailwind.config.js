const defaultTheme = require("tailwindcss/defaultTheme");
const { colors } = defaultTheme;

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js}",
    ],
    theme: {
        extend: {
            content: {
                star: "'*'",
            },
            fontFamily: {
                sans: ["Inter", "Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                ...colors,
                green: {
                    700: "#3c948b",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
}