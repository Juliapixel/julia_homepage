export const prerender = true;
export const trailingSlash = "ignore";

import "$lib/i18n/i18n";
import { waitLocale } from "svelte-i18n";

export const load = async () => {
    await waitLocale();
};
