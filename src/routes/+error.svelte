<script lang="ts">
    import { page } from "$app/stores";
    import DarkToggle from "$lib/DarkToggle.svelte";
    import ErrorText from "$lib/ErrorText.svelte";
    import { onMount } from "svelte";

    let msg_box: Element;

    $page.status;

    onMount(() => {
        const message = new ErrorText({
            intro: false,
            target: msg_box,
            hydrate: false,
        });
    });

    function handleClick() {
        history.back();
    }
</script>

<div
    class="flex flex-col justify-center items-center text-center min-h-[100vh]"
>
    <img src="/uuh.webp" alt="epic cat!!!1!" />
    <div bind:this={msg_box} />
    <p>Error {$page.status}</p>
    <div>
        <button class="mt-24" on:click={handleClick}>go back</button>
        <a href="/" class="">
            <button class="mt-24">go home</button>
        </a>
    </div>
</div>
<div class="absolute bottom-2 right-2">
    <DarkToggle />
</div>
