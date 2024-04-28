<script lang="ts">
    import Meta from "$lib/Meta.svelte";
import { _ } from "svelte-i18n";
</script>

<Meta description="stuff i've made" title="stuff i've made" image="/uuh.png"/>

<h1><a href="https://github.com/Juliapixel/make_it_braille">make_it_braille</a></h1>
<p>{$_("sim.mit.0")}:</p>
<div class="inline-flex max-w-full flex-nowrap rounded-lg p-5 overflow-auto [text-shadow:none] text-sm text-neutral-200 bg-zinc-900 border border-zinc-700">
<pre class="font-sourceCodePro">
$ make_it_braille --width 100 --dithering sierra2 ./uuh.png
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
⡀⢃⠘⡀⠃⠤⠈⡌⡀⠃⠨⠄⠅⠂⠄⠨⡀⡁⢋⠘⠣⠎⢽⢸⠱⣏⢼⢣⠻⡸⢣⠻⡸⢇⠻⡸⣡⢛⡘⠲⡀⢇⠘⡠⢊⠰⢨⠜⡦⣧
</pre>
</div>
<p>{$_("sim.mit.1")} <a href="/experiments/braille">{$_("sim.mit.2")}</a></p>

<hr />
<h1><a href="https://github.com/Juliapixel/thermal_printer_rs">thermal_printer_rs</a></h1>
<p>{$_("sim.tpr.0")}</p>
<p>{$_("sim.tpr.1")}:</p>
<ul>
    <li>{$_("sim.tpr.list.0")}</li>
    <li>{$_("sim.tpr.list.1")}</li>
    <li>{$_("sim.tpr.list.2")}</li>
</ul>
<img class="w-80" src="/thermal_printer.webp" alt={$_("sim.tpr.alt")}/>

<hr />
<h1><a href="https://github.com/Juliapixel/julia_homepage">{$_("sim.tw.title")}</a></h1>
<p>{$_("sim.tw.0")}</p>
<p>{$_("sim.tw.1")}</p>
