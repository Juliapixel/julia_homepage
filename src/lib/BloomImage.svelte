<script lang="ts">
    import { onMount } from "svelte";

    export let src: string;
    export let alt: string;
    let clazz: string = "";
    export {clazz as class};
    let main_image: HTMLImageElement;
    let bloom_image: HTMLImageElement;

    onMount(() => {
        bloom_image.width = main_image.width;
        bloom_image.height = main_image.height;
    });
</script>

<img {src} {alt} bind:this={bloom_image} class="{clazz} absolute mix-blend-screen blur-[10px] opacity-50"/>
<img {src} {alt} bind:this={main_image} class={clazz}/>
