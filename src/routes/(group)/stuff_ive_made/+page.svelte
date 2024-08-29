<script lang="ts">
    import Code from "$lib/Code.svelte";
    import Meta from "$lib/Meta.svelte";
    import { _ } from "svelte-i18n";

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
<p>{$_("sim.mit.0")}:</p>

<Code {code} />
<p>{$_("sim.mit.1")} <a href="/experiments/braille">{$_("sim.mit.2")}</a></p>

<hr />
<h1>
    <a href="https://github.com/Juliapixel/thermal_printer_rs"
        >thermal_printer_rs</a
    >
</h1>
<p>{$_("sim.tpr.0")}</p>
<p>{$_("sim.tpr.1")}:</p>
<ul>
    <li>{$_("sim.tpr.list.0")}</li>
    <li>{$_("sim.tpr.list.1")}</li>
    <li>{$_("sim.tpr.list.2")}</li>
</ul>
<img class="w-80" src="/thermal_printer.webp" alt={$_("sim.tpr.alt")} />

<hr />

<h1>
    <a href="https://github.com/Juliapixel/palm_kb_rs">palm_kb_rs</a>
</h1>
<p>{$_("sim.pkb.0")}</p>
<img class="w-[30rem]" src="https://cdn.juliapixel.com/julia/palm_kb.jpg" />
<p>{$_("sim.pkb.1")}</p>

<hr />
<h1>
    <a href="https://github.com/Juliapixel/julia_homepage"
        >{$_("sim.tw.title")}</a
    >
</h1>
<p>{$_("sim.tw.0")}</p>
<p>{$_("sim.tw.1")}</p>
