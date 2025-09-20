<script lang="ts">
    import { m } from "./paraglide/messages";
    import { getLocale, localizeHref, setLocale } from "./paraglide/runtime";
    import VerticalSeparator from "./VerticalSeparator.svelte";

    let showNav = $state(false);
</script>

{#snippet logo(text?: string)}
    <div class="flex items-center">
        <h1 class="inline text-3xl m-0">{">_<"}</h1>
        {#if text}
            <div class="inline-block mx-3 border-l border-zinc-500 h-8">
                &zwj;
            </div>
            <span class="text-xl">{text}</span>
        {/if}
    </div>
{/snippet}

<header
    class="flex flex-row px-3 py-1 items-center w-full justify-between bg-neutral-400 border-4 border-t-0 border-b-neutral-700 border-r-neutral-700"
>
    <div class="not-md:hidden flex flex-row items-center space-x-3">
        <a href={localizeHref("/")} class="no-underline">
            {@render logo()}
        </a>
        <VerticalSeparator height_class="h-8" />
        <a href={localizeHref("/faq")}>
            <button class="cursor-pointer" tabindex="-1">faq</button>
        </a>
        <a href={localizeHref("/contact")}>
            <button class="cursor-pointer" tabindex="-1"
                >{m["header.contact"]()}</button
            >
        </a>
        <a href={localizeHref("/stuff_ive_made")}>
            <button class="cursor-pointer" tabindex="-1"
                >{m["header.stuff_ive_made"]()}</button
            >
        </a>
    </div>
    <div class="md:hidden">
        <button
            class="px-2 py-1 cursor-pointer"
            onclick={() => (showNav = !showNav)}
        >
            {@render logo("Start")}
        </button>
    </div>
    <div class="flex flex-row items-center space-x-3">
        {#if getLocale() == "en"}
            <button
                class="cursor-pointer py-3"
                aria-label="Português"
                onclick={() => setLocale("pt")}
            >
                <img alt="Português" src="/brazil.png" />
            </button>
        {:else}
            <button
                class="cursor-pointer py-3"
                aria-label="English"
                onclick={() => setLocale("en")}
            >
                <img alt="English" src="/united_states.png" />
            </button>
        {/if}
    </div>
</header>

{#snippet navLink(text: string, path: string)}
    <a
        href={localizeHref(path)}
        onclick={() => (showNav = false)}
        class="px-5 py-1 block cursor-pointer text-inherit no-underline text-lg hover:bg-[#010080] hover:text-white active:bg-[#010080] active:text-white"
    >
        {text}
    </a>
{/snippet}

{#if showNav}
    <nav
        class="fixed md:hidden z-10 flex flex-row w-fit bg-neutral-400 border-4 border-b-neutral-700 border-r-neutral-700"
    >
        <div
            class="[writing-mode:vertical-rl] pt-4 pb-2 pl-1 pr-1 text-white bg-[#010080]"
        >
            <span class="text-lg font-bold font-source-code-pro">Julia</span>
        </div>
        <div class="flex flex-col">
            {@render navLink("home", "/")}
            <hr class="m-0 border-neutral-600 border-b-neutral-200" />
            {@render navLink("faq", "/faq")}
            <hr class="m-0 border-neutral-600 border-b-neutral-200" />
            {@render navLink(m["header.contact"](), "/contact")}
            <hr class="m-0 border-neutral-600 border-b-neutral-200" />
            {@render navLink(m["header.stuff_ive_made"](), "/stuff_ive_made")}
        </div>
    </nav>
{/if}
