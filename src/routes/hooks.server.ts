import type { Handle } from "@sveltejs/kit";
import { locale, locales } from "svelte-i18n";
import { get } from "svelte/store";

export const handle: Handle = ({event, resolve}) => {
    locale.subscribe((l) => { console.log(l) })
    const langs: string[] | undefined = event.request.headers.get("accept-language")?.split(",").map<string>((v) => { return v.split(";", 1)[0].split("-", 1)[0] })
    const found_lang = langs?.find((v) => get(locales).includes(v))
    if (found_lang) {
        locale.set(found_lang)
    } else {
        locale.set(langs?.at(0));
    }

    return resolve(event);
}
