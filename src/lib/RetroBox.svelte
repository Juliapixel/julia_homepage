<script lang="ts">
    import { page } from "$app/stores";

    interface Props {
        bottom_right_text?: string;
        bottom_left_text?: string;
        children?: import("svelte").Snippet;
    }

    let { bottom_left_text, bottom_right_text, children }: Props = $props();
</script>

<div
    class="p-[2px] border-4 border-r-neutral-700 border-b-neutral-700 bg-neutral-400"
>
    <div
        class="flex flex-row justify-between items-center pl-2 m-1 from-blue-900 to-blue-700 bg-linear-to-r"
    >
        <span class="text-neutral-200 not-md:hidden"
            >{$page.url.host}{$page.url.pathname} &mdash; Netscape 4</span
        >
        <span class="text-neutral-200 md:hidden"
            >{$page.url.pathname} &mdash; Netscape 4</span
        >
        <div class="flex flex-row h-full p-1 gap-1">
            <button class="p-0 max-w-fit" disabled aria-hidden="true">
                <img
                    src="/minimize.png"
                    alt="minimize icon"
                    class="h-full aspect-square [image-rendering:pixelated]"
                />
            </button>
            <button class="p-0 max-w-fit" disabled aria-hidden="true">
                <img
                    src="/maximize.png"
                    alt="maximize icon"
                    class="h-full aspect-square [image-rendering:pixelated]"
                />
            </button>
            <button class="p-0 max-w-fit" disabled aria-hidden="true">
                <img
                    src="/close.png"
                    alt="close icon"
                    class="h-full aspect-square [image-rendering:pixelated]"
                />
            </button>
        </div>
    </div>
    <main
        class="md:p-8 not-md:p-5 mt-2 border-4 border-t-neutral-700 border-l-neutral-700 bg-neutral-100 m-1"
    >
        {@render children?.()}
    </main>

    {#if bottom_left_text && bottom_right_text}
        <footer class="px-2 text-black w-full">
            <span>
                {bottom_left_text}
            </span>
            <span class="float-right">
                {bottom_right_text}
            </span>
        </footer>
    {:else if bottom_right_text}
        <footer class="px-2 text-end text-black">
            {bottom_right_text}
        </footer>
    {:else if bottom_left_text}
        <footer class="px-2 text-start text-black">
            {bottom_left_text}
        </footer>
    {/if}
</div>
