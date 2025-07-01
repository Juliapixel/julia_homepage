<script lang="ts">
    import type { Snippet } from "svelte";
    import "../app.css";
    import { locales, localizeHref } from "../paraglide/runtime";
    import { page } from "$app/stores";
    import { building } from "$app/environment";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

{#if building}
<div class="hidden">
    {#each locales as locale}
        <a href={localizeHref($page.url.pathname, { locale })}>{locale}</a>
    {/each}
</div>
{/if}

{@render children()}
