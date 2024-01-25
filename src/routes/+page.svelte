<script lang="ts">
    import BloomImage from "$lib/BloomImage.svelte";
    import Tooltip from "$lib/Tooltip.svelte";
    import tippy, { type Props } from "tippy.js";
    import "tippy.js/animations/perspective-subtle.css"

    function tooltip(n: Element, opts: Partial<Props>) {
        const tooltip = tippy(n, opts);

        return {
            destroy() {
                tooltip.destroy()
            }
        };
    }
</script>

<div class="ml-[20%] mr-[20%] max-md:ml-0 max-md:mr-0 p-8 mt-12 shadow-lg dark:bg-zinc-800 bg-zinc-100">
    <BloomImage src="/uuh.webp" alt="epic cat!!!1!"/>
    <h1>yo</h1>
    <p>
        i'm Julia (she/her), a 19yo "software developer" from
        <span use:tooltip={{content:"help", animation: "perspective-subtle"}}>brazil</span>
    </p>
    <p>u can reach me on discord @Juliapixel if u want to</p>
    <p>
        also check out my
        <a href="https://github.com/juliapixel/">github</a>
        woah
    </p>
    <p>
        or by
        <a href="mailto://homepage@juliapixel.com">email</a>
        if ur into that sorta stuff
    </p>
    <p class="mt-32">also i'm adding more stuff on here eventually ok</p>
</div>
