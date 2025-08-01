<script lang="ts">
    import JuliasTime from "$lib/JuliasTime.svelte";
    import Meta from "$lib/Meta.svelte";
    import tooltip from "$lib/utils/tooltip";
    import { m } from "$lib/paraglide/messages";
    import { localizeHref } from "$lib/paraglide/runtime";
</script>

<Meta title="Julia's stuff!" description="it's her stuff!" image="/uuh.png" />

<img
    src="/NUCLEARBOMB.gif"
    alt="a nuclear bomb going off"
    class="absolute opacity-0 hover:opacity-100 w-[321px] h-[105px]"
/>
<img
    src="/fire.gif"
    alt="epic cat!!!1!"
/>
<h1>{m["home.yo"]()}</h1>
<p>
    {m["home.intro_main"]()}
    <span use:tooltip={{ content: "help" }}>{m["home.brazil"]()}</span>
</p>
<p>
    {m["home.about_1._0"]()} <a href="https://tweaked.cc">ComputerCraft</a>
    {m["home.about_1._1"]()}
</p>
<p>{m["home.about_2._0"]()}</p>
<p>{m["home.likes._0"]()}:</p>
<ul>
    <li>{m["home.likes._1"]()}</li>
    <li>Rust</li>
    <li>videogames</li>
    <li>{m["home.likes._2"]()}</li>
    <li>Svelte</li>
</ul>
<p>
    {m["home.contact._0"]()}
    <a href={localizeHref("/contact")}>{m["home.contact._1"]()}</a>
</p>
<div class="mt-8">
    {m["home.my_current_time_is"]()}: <JuliasTime offset={-3} />
</div>
