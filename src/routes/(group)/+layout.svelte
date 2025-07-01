<script lang="ts">
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import Header from "$lib/Header.svelte";
    import { m } from "$lib/paraglide/messages";
    import { getLocale, localizeHref, setLocale } from "$lib/paraglide/runtime";
    import RetroBox from "$lib/RetroBox.svelte";
    import VerticalSeparator from "$lib/VerticalSeparator.svelte";
    interface Props {
        children?: import("svelte").Snippet;
    }

    let { children }: Props = $props();

    function fakeParams(url: URL): string {
        if (browser) {
            let str = String();
            for (const param of url.searchParams) {
                str += `--${param[0]}="${encodeURIComponent(param[1])}" `;
            }
            return str;
        } else {
            return "";
        }
    }
</script>

<Header>
    {#snippet left()}
        <a href={localizeHref("/")} class="no-underline">
            <h1>{">_<"}</h1>
        </a>
        <VerticalSeparator height_class="h-8" />
        <a href={localizeHref("/faq")}>
            <button class="cursor-pointer" tabindex="-1">faq</button>
        </a>
        <a href={localizeHref("/contact")}>
            <button class="cursor-pointer" tabindex="-1">{m["header.contact"]()}</button>
        </a>
        <a href={localizeHref("/stuff_ive_made")}>
            <button class="cursor-pointer" tabindex="-1">{m["header.stuff_ive_made"]()}</button>
        </a>
    {/snippet}
    {#snippet right()}
        {#if getLocale() == "en"}
            <button class="cursor-pointer py-3" aria-label="Português" onclick={() => setLocale("pt")}>
                <img alt="Português" src="/brazil.png" />
            </button>
        {:else}
            <button class="cursor-pointer py-3" aria-label="English" onclick={() => setLocale("en")}>
                <img alt="English" src="/united_states.png" />
            </button>
        {/if}
    {/snippet}
</Header>
<div class="lg:mx-[20%] mt-12 mb-32">
    <RetroBox
        title="/usr/bin/homepage {fakeParams(
            $page.url,
        )}serve {`"${$page.url.pathname}"`}"
        bottom_right_text="</> with <3 by Julia"
        bottom_left_text={`${__GIT_REF__.slice(0, 8)} ${__GIT_BRANCH__}`}
    >
        {@render children?.()}
    </RetroBox>
</div>
