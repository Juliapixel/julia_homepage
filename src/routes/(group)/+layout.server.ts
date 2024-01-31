import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
    return {
        is_dark: false
    }
};
