<script lang="ts">
    import JuliasTime from "$lib/JuliasTime.svelte";
    import Meta from "$lib/Meta.svelte";
    import tooltip from "$lib/utils/tooltip";
    import { _ } from "svelte-i18n";

    let kaboom = $state(false);
</script>

<Meta title="Julia's stuff!" description="it's her stuff!" image="/uuh.png" />

{#if kaboom}
    <img
        src="NUCLEARBOMB.gif"
        alt="a nuclear bomb going off"
        class="w-[321px] h-[105px]"
        style="position: absolute; pointer-events: none;"
    />
{/if}
<img
    src="/fire.gif"
    alt="epic cat!!!1!"
    onmouseenter={() => (kaboom = true)}
    onmouseleave={() => (kaboom = false)}
/>
<h1>{$_("home.yo")}</h1>
<p>
    {$_("home.intro_main")}
    <span use:tooltip={{ content: "help" }}>{$_("home.brazil")}</span>
</p>
<p>
    {$_("home.about_1.0")} <a href="https://tweaked.cc">ComputerCraft</a>
    {$_("home.about_1.1")}
</p>
<p>{$_("home.about_2.0")}</p>
<p>{$_("home.likes.0")}:</p>
<ul>
    <li>{$_("home.likes.1")}</li>
    <li>Rust</li>
    <li>videogames</li>
    <li>{$_("home.likes.2")}</li>
    <li>Svelte</li>
</ul>
<p>{$_("home.contact.0")} <a href="/contact">{$_("home.contact.1")}</a></p>
<div class="mt-8">
    {$_("home.my_current_time_is")}: <JuliasTime offset={-3} />
</div>
