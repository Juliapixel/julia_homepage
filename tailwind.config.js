/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            // "sans": ["vecterminus14", "ui-monospace", "monospace"],
            "mono": ["Tamzen", "ui-monospace", "monospace"],
            // "body": ["vecterminus14", "ui-monospace", "monospace"]
        },
        extend: {
            fontFamily: {
                vecTerminus: ["vecterminus14"],
                tamzen: ["Tamzen"]
            },
        },
    },
    darkMode: "class",
    plugins: [],
}
