<script lang="ts">
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import Header from "$lib/Header.svelte";
    import RetroBox from "$lib/RetroBox.svelte";
    import VerticalSeparator from "$lib/VerticalSeparator.svelte";
    import { _ } from "svelte-i18n";
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
        <a href="/" class="no-underline">
            <h1>{">_<"}</h1>
        </a>
        <VerticalSeparator height_class="h-8" />
        <a href="/faq">
            <button tabindex="-1">faq</button>
        </a>
        <a href="/contact">
            <button tabindex="-1">{$_("header.contact")}</button>
        </a>
        <a href="/stuff_ive_made">
            <button tabindex="-1">{$_("header.stuff_ive_made")}</button>
        </a>
    {/snippet}
    {#snippet right()}
        <!-- no dark theme for now ig -->
        <!-- <DarkToggle dark_enabled={data.is_dark} /> -->
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
