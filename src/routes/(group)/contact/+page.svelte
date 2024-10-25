<script lang="ts">
    import Meta from "$lib/Meta.svelte";
    import tooltip from "$lib/utils/tooltip";

    async function handleClick(this: HTMLSpanElement) {
        navigator.clipboard.writeText(this.innerText);
    }

    async function handleKeyDown(this: HTMLSpanElement, event: KeyboardEvent) {
        if (event.key == "Enter" || event.key == " ") {
            navigator.clipboard.writeText(this.innerText);
        }
    }
</script>

<Meta title="Julia's stuff!" description="contact info!" image="/uuh.png" />

<p><span class="opacity-65">Discord: </span>@Juliapixel</p>
<p>
    <span class="opacity-65">E-Mail: </span><span
        class="underline"
        use:tooltip={{ content: "Copy to Clipboard" }}
        aria-label="Copy to Clipboard"
        role="button"
        tabindex="0"
        onkeydown={handleKeyDown}
        onclick={handleClick}>contact@juliapixel.com</span
    >
</p>
<p>
    <span class="opacity-65">Github: </span><a
        href="https://github.com/Juliapixel"
        target="_blank">https://github.com/Juliapixel</a
    >
</p>
