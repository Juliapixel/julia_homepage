<script lang="ts">
    import Code from "$lib/Code.svelte";
    import Meta from "$lib/Meta.svelte";
    import { m } from "$lib/paraglide/messages";
    import { localizeHref } from "$lib/paraglide/runtime";

    const code = `$ make_it_braille --width 100 --dithering sierra2 ./uuh.png
⡯⣹⢹⡍⡯⡹⡍⣯⢩⣏⡽⣭⣭⡭⡯⡽⢭⠯⡽⢭⢯⡝⣽⢹⡏⣟⢽⢹⡝⣝⢝⢝⣝⢏⡟⣽⢹⢝⡝⡽⣍⢯⢭⡭⣭⢭⡍⣧⢙⡔
⣇⢗⣎⢺⡸⡪⢷⢽⢾⡸⣓⢗⡞⣮⠳⡝⣭⠫⣜⢱⡃⡗⡱⢃⠝⡸⡑⡋⢖⠡⢎⠵⠱⠍⠞⠨⠓⢑⠙⠪⡊⡗⢳⡕⣗⢺⢲⢕⡭⡺
⣇⢷⢸⡇⡯⠙⠝⠱⠋⢖⢱⣊⢖⣅⡋⣞⢸⢪⠎⣮⢱⢍⢎⠸⢠⢇⡼⡨⠎⠑⠁⡈⡀⢂⠐⠄⠂⠠⠌⠠⠠⡈⢪⠸⣅⢟⢼⢪⡎⣻
⣇⡻⡸⡎⢆⠑⡈⠄⠁⠄⠠⢀⠓⣾⠢⡏⡼⣱⢹⠔⣇⢧⢹⡘⡧⢿⡸⢃⠌⠤⢁⠔⠠⠈⠄⠄⠄⠄⠄⠄⡄⢱⡘⣶⢱⡇⢷⠔⡵⢨
⢌⢪⡣⣻⡄⢣⠠⡀⣀⢀⡔⣌⠞⣥⢻⡸⡣⣏⡜⣣⠳⡸⢄⠇⡕⢍⢎⡸⡢⣗⢵⣬⢗⣵⢴⡤⡦⡦⠺⡦⢻⢊⠟⡸⢡⢋⢜⢅⠇⡧
⢶⢨⠺⡤⡫⡫⠽⡭⢯⣝⢵⡅⢟⠸⠪⡎⠳⠜⠼⢨⠚⡔⠅⢧⡕⣷⢺⡼⣧⣻⡺⡮⡿⣼⢣⠟⡼⣩⢫⡘⡅⣍⢸⡀⡇⡼⣰⢃⡟⡼
⡇⣝⢸⠫⣮⢹⢎⣽⢳⣝⡗⢷⢬⣌⠣⠈⠅⢅⢡⡠⡖⣴⢛⠮⢷⣝⣝⢗⡯⣾⢹⣏⢷⢽⡜⣕⢑⠆⡪⢰⠁⡆⢢⢊⠊⡖⡩⢎⣇⢻
⡇⢮⢸⢱⡌⡷⢵⡹⣇⢷⡙⡏⢶⣉⢝⠸⡐⠐⢕⢑⢃⢇⠹⡙⡒⡣⢚⢕⢓⡚⡖⣱⢋⡎⡳⢹⠸⡡⠏⢬⢅⢕⢡⠊⣆⢱⢑⠦⡕⠹
⣇⢷⡹⢮⢹⡙⡪⡢⣋⢾⣸⢓⢶⢰⡌⢦⡡⡃⡆⢆⠔⡨⡐⢌⠄⣅⢘⢀⠇⡸⢀⠧⠌⡥⣙⢘⡂⢳⠘⡆⢲⢘⡄⡳⡨⣮⣹⢳⢏⠌
⡫⡊⡖⡱⢜⡬⡮⠺⢩⡞⣵⢻⢵⢇⡟⣼⢸⡊⣖⣱⢊⠦⡣⣊⢲⢀⠇⡜⢰⠅⡇⡜⡨⢢⠸⡠⢇⢕⡅⣯⢸⡆⣯⡚⡷⣪⢮⡻⡜⠠
⠾⠬⠮⠳⢋⢐⠁⠜⠰⢯⣽⣙⢷⡫⡗⣽⢸⡣⡞⣴⢋⣗⡕⣮⢜⡵⢱⣍⢎⡞⣔⢇⠷⡜⣕⡓⡯⡎⣷⢱⡏⡾⣪⢏⡾⣱⢏⢾⢉⠂
⡐⢐⢈⠂⠢⠠⠁⠅⢃⠚⢲⠻⣮⣫⣻⡜⣯⢞⡽⣪⣻⢲⣏⣾⣸⣓⣗⢾⣜⣧⢯⡽⣹⢇⢿⡸⣇⢿⡸⣇⠿⡼⣣⢟⡼⣣⢻⠐⡡⢈
⡐⠡⠨⠨⠨⡈⡈⠂⠡⠈⠄⠙⠐⠳⢪⠞⡵⣫⢞⡵⣫⢞⡞⡶⣣⢟⣼⢳⢵⡝⣮⢳⡝⡽⣦⢻⡜⡷⢵⢽⣅⡏⣺⢊⠞⡠⢊⠐⠄⡂
⡀⢃⠘⡀⠃⠤⠈⡌⡀⠃⠨⠄⠅⠂⠄⠨⡀⡁⢋⠘⠣⠎⢽⢸⠱⣏⢼⢣⠻⡸⢣⠻⡸⢇⠻⡸⣡⢛⡘⠲⡀⢇⠘⡠⢊⠰⢨⠜⡦⣧`;
</script>

<Meta description="stuff i've made" title="stuff i've made" image="/uuh.png" />

<h1>
    <a href="https://github.com/Juliapixel/make_it_braille">make_it_braille</a>
</h1>
<p>{m["sim.mit.0"]()}:</p>

<Code {code} />
<p>
    {m["sim.mit.1"]()}
    <a href={localizeHref("/experiments/braille")}>{m["sim.mit.2"]()}</a>
</p>

<hr />
<h1>
    <a href="https://github.com/Juliapixel/thermal_printer_rs"
        >thermal_printer_rs</a
    >
</h1>
<p>{m["sim.tpr.0"]()}</p>
<p>{m["sim.tpr.1"]()}:</p>
<ul>
    <li>{m["sim.tpr.list.0"]()}</li>
    <li>{m["sim.tpr.list.1"]()}</li>
    <li>{m["sim.tpr.list.2"]()}</li>
</ul>
<img class="w-80" src="/thermal_printer.webp" alt={m["sim.tpr.alt"]()} />

<hr />

<h1>
    <a href="https://github.com/Juliapixel/palm_kb_rs">palm_kb_rs</a>
</h1>
<p>{m["sim.pkb.0"]()}</p>
<img
    class="w-120"
    src="https://cdn.juliapixel.com/julia/palm_kb.jpg"
    alt={m["sim.pkb.alt"]()}
/>
<p>{m["sim.pkb.1"]()}</p>

<hr />

<h1>
    <a href="https://github.com/Juliapixel/wutville_bg"> wutville_bg </a>
</h1>
<p>{m["sim.wbg.p1"]()}</p>
<p>
    <span>{m["sim.wbg.p2"]()}</span>
    <span
        ><a href="https://github.com/Juliapixel/twitch_emote_api"
            >{m["sim.wbg.p2a"]()}</a
        ></span
    >
</p>
<img
    src="https://cdn.juliapixel.com/julia/wutville.webp"
    alt={m["sim.wbg.alt"]()}
/>

<hr />

<h1>
    <a href="https://cabbit.me">cabbit.me</a>
</h1>
<p>{m["sim.cbme.p1"]()}</p>
<p>{m["sim.cbme.p2"]()}</p>
<img class="max-w-full w-xl" alt="cabbit.me" src="/cabbit_me.png" />

<hr />

<h1>
    <a href="https://github.com/Juliapixel/julia_homepage"
        >{m["sim.tw.title"]()}</a
    >
</h1>
<p>{m["sim.tw.0"]()}</p>
<p>{m["sim.tw.1"]()}</p>

<style lang="postcss">
    @reference "tailwindcss";

    p + p {
        @apply mt-2;
    }
</style>
