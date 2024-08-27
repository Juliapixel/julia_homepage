<script lang="ts">
    import { page } from "$app/stores";
    export let title: string;
    export let bottom_text: string | undefined = undefined;
</script>

<div
    class="p-[2px] border-4 border-r-neutral-700 border-b-neutral-700 bg-neutral-400"
>
    <div
        class="flex flex-row justify-between items-center pl-2 m-1 h-8 from-blue-900 to-blue-700 bg-gradient-to-r"
    >
        <span class="text-neutral-200">{title}</span>
        <div class="flex flex-row h-full p-1 gap-1">
            <button class="p-0 max-w-fit" disabled aria-hidden="true">
                <img
                    src="/minimize.png"
                    alt="minimize icon"
                    class="h-full aspect-square [image-rendering:crisp-edges]"
                />
            </button>
            <button class="p-0 max-w-fit" disabled aria-hidden="true">
                <img
                    src="/maximize.png"
                    alt="maximize icon"
                    class="h-full aspect-square [image-rendering:crisp-edges]"
                />
            </button>
            <button class="p-0 max-w-fit" disabled aria-hidden="true">
                <img
                    src="/close.png"
                    alt="close icon"
                    class="h-full aspect-square [image-rendering:crisp-edges]"
                />
            </button>
        </div>
    </div>
    <main
        class="p-8 mt-2 border-4 border-t-neutral-700 border-l-neutral-700 bg-neutral-100 m-1"
    >
        <slot />
    </main>
    {#if bottom_text}
        <footer class="px-2 text-end text-black">
            {bottom_text}
        </footer>
    {/if}
</div>
