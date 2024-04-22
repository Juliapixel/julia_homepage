<script lang="ts">
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import DarkToggle from "$lib/DarkToggle.svelte";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import RetroBox from "$lib/RetroBox.svelte";
    import VerticalSeparator from "$lib/VerticalSeparator.svelte";
    import type { LayoutData } from "./$types";
    import { _ } from "svelte-i18n";

    export let data: LayoutData;

    function fakeParams(url: URL): string {
        if (browser) {
            let str = String()
            for (const param of url.searchParams) {
                str += `--${param[0]}="${encodeURIComponent(param[1])}" `
            }
            return str
        } else {
            return ""
        }
    }
</script>

<Header>
    <svelte:fragment slot="left">
        <a href="/" class="no-underline text-black">
            <h1>{">_<"}</h1>
        </a>
        <VerticalSeparator height_class="h-8" />
        <a href="/faq">
            <button>faq</button>
        </a>
        <a href="/contact">
            <button>{$_("header.contact")}</button>
        </a>
        <a href="/stuff_ive_made">
            <button>{$_("header.stuff_ive_made")}</button>
        </a>
    </svelte:fragment>
    <svelte:fragment slot="right">
        <DarkToggle dark_enabled={data.is_dark}/>
    </svelte:fragment>
</Header>
<div class="lg:mx-[20%]">
    <RetroBox title="/usr/bin/homepage {fakeParams($page.url)}{$page.url.pathname}" bottom_text="made by julia">
        <slot />
    </RetroBox>
</div>
<Footer>
    <svelte:fragment slot="links">
        <a href="https://github.com/juliapixel">
            <svg viewBox="0 -1 98 98" class="fill-zinc-800 dark:fill-zinc-100 h-8">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
            </svg>
        </a>
        <VerticalSeparator height_class="h-6"/>
        <a href="mailto:julia@juliapixel.com" aria-label="Juliapixel.com">
            <svg viewBox="0 -960 960 960" class="fill-zinc-800 dark:fill-zinc-100 h-8">
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
            </svg>
        </a>
    </svelte:fragment>
    <svelte:fragment slot="info">
        <p>{$_("footer.love")}</p>
        <div class="flex mt-20">
            <p class="pr-3">{$_("footer.gay")}</p><div class="text-lg spinnu">🏳️‍⚧️</div>
        </div>
    </svelte:fragment>
</Footer>
<br />
<br />

<style>
    .spinnu {
        animation: spinnu 250ms linear infinite;
    }

    @keyframes spinnu {
        to {
            transform: rotate(360deg);
        }
    }
</style>
