<script lang="ts">
    import BloomImage from "$lib/BloomImage.svelte";
    import JuliasTime from "$lib/JuliasTime.svelte";
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
<h1>{$_("home.yo")}</h1>
<p>
    {$_("home.intro_main")}
    <span use:tooltip={{content:"help", animation: "perspective-subtle"}}>{$_("home.brazil")}</span>
</p>
<p>{$_("home.reach_on_discord")}</p>
<p>
    {$_("home.or_by")}
    <a href="mailto:homepage@juliapixel.com">email</a>
    {$_("home.that_sorta_stuff")}
</p>
<p>
    {$_("home.check_out_my")}
    <a href="https://github.com/juliapixel/">github</a>
    {$_("home.woah")}
</p>
<div class="mt-8">
    {$_("home.my_current_time_is")}: <JuliasTime />
</div>
