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
<p>{$_("home.about_1.0")} <a href="https://tweaked.cc">ComputerCraft</a> {$_("home.about_1.1")}</p>
<p>{$_("home.about_2.0")}</p>
<p>{$_("home.likes.0")}:</p>
<ul>
    <li>{$_("home.likes.1")}</li>
    <li>{$_("home.likes.2")}</li>
    <li>Svelte</li>
</ul>
<p>{$_("home.contact.0")} <a href="/contact">{$_("home.contact.1")}</a></p>
<div class="mt-8">
    {$_("home.my_current_time_is")}: <JuliasTime />
</div>
