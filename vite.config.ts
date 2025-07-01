import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { execSync } from "child_process";
import tailwindcss from "@tailwindcss/vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";

export default defineConfig({
    plugins: [
        sveltekit(),
        tailwindcss(),
        paraglideVitePlugin({
            project: "./project.inlang",
            outdir: "./src/lib/paraglide",
            strategy: ["localStorage", "url", "baseLocale"],
            urlPatterns: [
                {
                    pattern: ":path(.*)?",
                    localized: [
                        ["en", "/en/:path(.*)?"],
                        ["pt", "/pt/:path(.*)?"],
                        ["en", "/:path(.*)?"],
                    ],
                },
            ],
        }),
    ],
    define: {
        __GIT_REF__: JSON.stringify(execSync("git rev-parse HEAD").toString()),
        __GIT_BRANCH__: JSON.stringify(
            execSync("git rev-parse --abbrev-ref HEAD").toString(),
        ),
    },
});
