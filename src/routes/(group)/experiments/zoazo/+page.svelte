<script lang="ts">
    let zoazo: undefined | string;
    let is_error = false;

    async function getZoazo() {
        try {
            let resp = await fetch("https://stuff.juliapixel.com/zoazo");
            zoazo = await resp.text();
            is_error = false;
        } catch (error) {
            zoazo = String(error);
            is_error = true;
        }
    }
</script>

<button on:click={getZoazo}>Click to zoazo</button>
{#if zoazo}
    <h1 class:text-red-500={is_error}>{zoazo}</h1>
{/if}
