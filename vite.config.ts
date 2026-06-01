import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { execSync } from "child_process";
import tailwindcss from "@tailwindcss/vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";

function gitInfo() {
    try {
        return {
            __GIT_REF__: JSON.stringify(
                execSync("git rev-parse HEAD").toString(),
            ),
            __GIT_BRANCH__: JSON.stringify(
                execSync("git rev-parse --abbrev-ref HEAD").toString(),
            ),
        };
    } catch (_e) {
        return {
            __GIT_REF__: JSON.stringify(process.env.__GIT_REF__),
            __GIT_BRANCH__: JSON.stringify(process.env.__GIT_BRANCH__),
        };
    }
}

export default defineConfig({
    plugins: [
        sveltekit(),
        tailwindcss(),
        paraglideVitePlugin({
            project: "./project.inlang",
            outdir: "./src/lib/paraglide",
            strategy: ["custom-Wah", "url", "localStorage"],
            urlPatterns: [
                {
                    pattern: ":path(.*)?",
                    localized: [
                        ["pt", "/pt/:path(.*)?"],
                        ["en", "/:path(.*)?"],
                    ],
                },
            ],
        }),
    ],
    define: gitInfo(),
});
