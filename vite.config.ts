import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { execSync } from "child_process";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [sveltekit(), tailwindcss()],
    define: {
        __GIT_REF__: JSON.stringify(execSync("git rev-parse HEAD").toString()),
        __GIT_BRANCH__: JSON.stringify(
            execSync("git rev-parse --abbrev-ref HEAD").toString(),
        ),
    },
});
