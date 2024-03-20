<script>
    import { building } from "$app/environment";
    import { onMount } from "svelte";

    let time = new Date();
    time.setUTCMilliseconds(time.getUTCMilliseconds() - (3600 * 1000 * 3));

    onMount(() => {
        const interval = setInterval(() => {
            time = new Date();
            time.setUTCMilliseconds(new Date().getUTCMilliseconds() - (3600 * 1000 * 3));
        }, 1000)

        return () => clearInterval(interval);
    })
</script>

{#if !building}
    {`${time.getUTCFullYear()}-${(time.getUTCMonth() + 1).toString().padStart(2, "0")}-${time.getUTCDate().toString().padStart(2, "0")}`}
    {`${time.getUTCHours().toString().padStart(2, "0")}:${time.getUTCMinutes().toString().padStart(2, "0")}:${time.getUTCSeconds().toString().padStart(2, "0")}`}
{/if}
UTC-3
