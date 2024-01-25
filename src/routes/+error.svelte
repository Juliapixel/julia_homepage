<script lang="ts">
    import { page } from "$app/stores";
    import BloomImage from "$lib/BloomImage.svelte";
    import DarkToggle from "$lib/DarkToggle.svelte"

    const messages = [
        "erm this is awkward...",
        "there's nothing here...",
        "erm...",
        "orm...",
    ];

    $page.status

    function handleClick() {
        history.back()
    }
</script>



<div class="flex flex-col justify-center items-center text-center min-h-[100vh]">
    <BloomImage src="/uuh.webp" alt="epic cat!!!1!"/>
    <h1>{messages[Math.floor((Math.random() * messages.length))]}</h1>
    <p>Error {$page.status}</p>
    <button class="mt-24" on:click={handleClick}>go back</button>
</div>
<div class="absolute bottom-2 right-2">
    <DarkToggle />
</div>
