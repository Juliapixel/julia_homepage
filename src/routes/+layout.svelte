<script lang="ts">
    import type { Snippet } from "svelte";
    import "../app.css";
    import { locales, localizeHref } from "../paraglide/runtime";
    import { page } from "$app/stores";
    import { building } from "$app/environment";
    import {
        baseLocale,
        defineCustomClientStrategy,
        extractLocaleFromNavigator,
        extractLocaleFromUrl,
        localStorageKey,
        type Locale,
    } from "$lib/paraglide/runtime";
    import { goto } from "$app/navigation";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();

    // makes it so that on first visit, you are redirected to your preferred language
    // and have that stored for later, but also respects URL, only if it's /pt
    defineCustomClientStrategy("custom-Wah", {
        getLocale: () => {
            const local = localStorage.getItem(
                localStorageKey,
            ) as Locale | null;
            const fromURL = extractLocaleFromUrl($page.url);
            if (local === null && fromURL == baseLocale) {
                return extractLocaleFromNavigator() ?? baseLocale;
            }
            if (local && fromURL == baseLocale) {
                return local;
            }
            return extractLocaleFromUrl($page.url) ?? baseLocale;
        },
        setLocale: (locale) => {
            if (!$page.error) {
                goto(localizeHref($page.url.href, { locale }));
            }
        },
    });
</script>

{#if building}
    <div class="hidden">
        {#each locales as locale}
            <a href={localizeHref($page.url.pathname, { locale })}>{locale}</a>
        {/each}
    </div>
{/if}

{@render children()}
