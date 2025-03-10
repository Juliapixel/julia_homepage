<script lang="ts">
    import { building } from "$app/environment";
    import { onMount } from "svelte";

    interface Props {
        /** offset from UTC in hours (only integers pls) */
        offset: number;
    }

    let { offset }: Props = $props();

    if (Math.trunc(offset) != offset) {
        throw new Error("offset must be an integer");
    }

    let myTime = new Date();
    myTime.setUTCMilliseconds(myTime.getUTCMilliseconds() + 3600 * 1000 * offset)

    let time = $state(myTime);

    onMount(() => {
        const interval = setInterval(() => {
            time = new Date()
            time.setUTCMilliseconds(
                time.getUTCMilliseconds() + 3600 * 1000 * offset,
            );
        }, 1000);

        return () => clearInterval(interval);
    });
</script>

{#if !building}
    {`${time.getUTCFullYear()}-${(time.getUTCMonth() + 1).toString().padStart(2, "0")}-${time.getUTCDate().toString().padStart(2, "0")}`}
    {`${time.getUTCHours().toString().padStart(2, "0")}:${time.getUTCMinutes().toString().padStart(2, "0")}:${time.getUTCSeconds().toString().padStart(2, "0")}`}
{/if}
UTC{offset >= 0 ? "+" : "-"}{Math.abs(offset)}
