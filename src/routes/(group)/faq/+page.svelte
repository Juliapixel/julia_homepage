<script lang="ts">
    interface QAndA {
        q: string,
        a: string
    }

    let q_and_a: Array<QAndA> = [
        {
            q: "huh",
            a: "?"
        },
    ]
</script>

{#each q_and_a as qa}
    <h1 class="text-lg m-0"><span class="opacity-65">q:</span>{qa.q}</h1>
    <p><span class="opacity-65">a:</span>{qa.a}</p>
{/each}
