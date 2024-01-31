<script lang="ts">
    import BloomImage from "$lib/BloomImage.svelte";
    import { _, locale, locales } from "svelte-i18n";
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

<BloomImage src="/uuh.webp" alt="epic cat!!!1!"/>
<h1>{$_("yo")}</h1>
<p>
    {$_("intro_main")}
    <span use:tooltip={{content:"help", animation: "perspective-subtle"}}>{$_("brazil")}</span>
</p>
<p>{$_("reach_on_discord")}</p>
<p>
    {$_("or_by")}
    <a href="mailto://homepage@juliapixel.com">email</a>
    {$_("that_sorta_stuff")}
</p>
<p>
    {$_("check_out_my")}
    <a href="https://github.com/juliapixel/">github</a>
    {$_("woah")}
</p>
<p class="mt-32">{$_("adding_more_stuff")}</p>
