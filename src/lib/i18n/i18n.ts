import {
    getLocaleFromNavigator,
    getLocaleFromQueryString,
    init,
    register,
} from "svelte-i18n";

register("en", () => import("./en.json"));
register("pt", () => import("./pt.json"));

let locale: string | null = null;

const from_query_string = getLocaleFromQueryString("lang");
const from_navigator = getLocaleFromNavigator();

if (from_query_string) {
    locale = from_query_string;
} else if (from_navigator) {
    locale = from_navigator;
}

init({
    fallbackLocale: "en",
    initialLocale: locale,
    handleMissingMessage: (i) => console.warn(i),
});
