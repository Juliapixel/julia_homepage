/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        fontFamily: {
            // "sans": ["vecterminus14", "ui-monospace", "monospace"],
            mono: ["vecterminus", "ui-monospace", "monospace"],
            // "body": ["vecterminus14", "ui-monospace", "monospace"]
        },
        extend: {
            fontFamily: {
                sourceCodePro: ["SourceCodePro"],
                vecTerminus: ["vecterminus"],
                tamzen: ["Tamzen"],
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
