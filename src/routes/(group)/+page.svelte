<script lang="ts">
    import JuliasTime from "$lib/JuliasTime.svelte";
    import Meta from "$lib/Meta.svelte";
    import tooltip from "$lib/utils/tooltip";
    import { m } from "$lib/paraglide/messages";
    import { localizeHref } from "$lib/paraglide/runtime";

    let kaboom = $state(false);
</script>

<Meta title="Julia's stuff!" description="it's her stuff!" image="/uuh.png" />

{#if kaboom}
    <img
        src="/NUCLEARBOMB.gif"
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
<h1>{m["home.yo"]()}</h1>
<p>
    {m["home.intro_main"]()}
    <span use:tooltip={{ content: "help" }}>{m["home.brazil"]()}</span>
</p>
<p>
    {m["home.about_1.0"]()} <a href="https://tweaked.cc">ComputerCraft</a>
    {m["home.about_1.1"]()}
</p>
<p>{m["home.about_2.0"]()}</p>
<p>{m["home.likes.0"]()}:</p>
<ul>
    <li>{m["home.likes.1"]()}</li>
    <li>Rust</li>
    <li>videogames</li>
    <li>{m["home.likes.2"]()}</li>
    <li>Svelte</li>
</ul>
<p>
    {m["home.contact.0"]()}
    <a href={localizeHref("/contact")}>{m["home.contact.1"]()}</a>
</p>
<div class="mt-8">
    {m["home.my_current_time_is"]()}: <JuliasTime offset={-3} />
</div>
