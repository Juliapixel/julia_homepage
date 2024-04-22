<script lang="ts">
    import { page } from "$app/stores";
    export let title: string;
</script>

<div class="p-[2px] border-4 border-r-neutral-700 border-b-neutral-700 bg-neutral-400">
    <div class="flex flex-row justify-between items-center pl-2 m-1 h-8 from-blue-900 to-blue-700 bg-gradient-to-r">
        <span>{title}</span>
        <div class="flex flex-row h-full">
            <img src="uuh.webp" class="h-full"/>
            <img src="uuh.webp" class="h-full"/>
            <img src="uuh.webp" class="h-full"/>
        </div>
    </div>
    <main class="p-8 mt-2 border-4 border-t-neutral-700 border-l-neutral-700 m-1 bg-neutral-800">
        <slot />
    </main>
</div>
