<script>
    import { onMount } from "svelte";

    let time = new Date();
    time.setUTCMilliseconds(time.getUTCMilliseconds() - (3600 * 1000 * 3));

    onMount(() => {
        const interval = setInterval(() => {
            time = new Date();
            time.setUTCMilliseconds(time.getUTCMilliseconds() - (3600 * 1000 * 3));
        }, 1000)

        return () => clearInterval(interval);
    })
</script>

{`${time.getUTCFullYear()}-${time.getUTCMonth().toString().padStart(2, "0")}-${time.getUTCDay().toString().padStart(2, "0")}`}
{`${time.getUTCHours().toString().padStart(2, "0")}:${time.getUTCMinutes().toString().padStart(2, "0")}:${time.getUTCSeconds().toString().padStart(2, "0")}`}
UTC-3
