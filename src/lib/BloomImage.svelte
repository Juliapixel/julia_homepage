<script lang="ts">
    import { onMount } from "svelte";

    export let src: string;
    export let alt: string;
    let clazz: string = "";
    export {clazz as class};
    let main_image: HTMLImageElement;
    let bloom_image: HTMLImageElement;

    function add_bloom() {
        // SUUUURELY bloom_image won't be undefined sometimes right?
        // race conditions are not real and can't hurt you
        bloom_image.width = main_image.width;
        bloom_image.height = main_image.height;
    };
</script>

<div>
    <img {src} {alt} bind:this={bloom_image} class="{clazz} pointer-events-none absolute mix-blend-screen blur-md z-[1] opacity-50"/>
    <img {src} {alt} bind:this={main_image} on:load={add_bloom} class="{clazz} relative"/>
</div>
