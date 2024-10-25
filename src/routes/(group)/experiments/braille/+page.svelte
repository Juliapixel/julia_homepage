<script lang="ts">
    import { building } from "$app/environment";
    import { page } from "$app/stores";
    import Meta from "$lib/Meta.svelte";

    let url = $state(building ? "" : $page.url.origin + "/uuh.webp");
    let url_error = $state(false);

    let width = $state(64);
    let auto_width = $state(true);
    let height = $state(64);
    let auto_height = $state(false);

    let braille: Response | undefined = $state();

    async function handleSubmission(this: HTMLFormElement, event: SubmitEvent) {
        event.preventDefault();
        let form_data = new FormData(this);

        url_error = !URL.canParse(form_data.get("img_url")?.toString() ?? "");

        if (!url_error) {
            // the vscode Svelte extension shows an error on this for god knows
            // what reason but it works so idc
            // @ts-ignore
            const params = new URLSearchParams(form_data).toString();

            let resp = await fetch(
                `https://stuff.juliapixel.com/braille?${params}`,
            );
            braille = resp;
        }
    }

    function clearError() {
        url_error = false;
    }
</script>

<Meta title="Braille Image" description="braille image experiment" />

<form class="flex flex-col gap-2 mx-10" onsubmit={handleSubmission}>
    <div class="flex flex-row items-center">
        <label class="text-nowrap" for="img_url">Image URL:</label>
        <!-- holy fuck is this ever big and it's not even because of tailwind -->
        <input
            class="w-full {url_error ? 'border border-red-500' : 'm-[1px]'}"
            oninput={clearError}
            bind:value={url}
            type="text"
            name="img_url"
            placeholder="URL"
        />
    </div>
    <div class="flex flex-row items-center justify-center">
        <label for="width">Width:</label>
        <input
            class="w-full"
            type="number"
            name="width"
            disabled={auto_width}
            bind:value={width}
        />
        <label for="auto_width">Auto:</label>
        <input type="checkbox" id="auto_width" bind:checked={auto_width} />
    </div>
    <div class="flex flex-row items-center justify-center">
        <label for="height">Height:</label>
        <input
            class="w-full"
            type="number"
            name="height"
            disabled={auto_height}
            bind:value={height}
        />
        <label for="auto_height">Auto:</label>
        <input type="checkbox" id="auto_height" bind:checked={auto_height} />
    </div>
    <div class="flex flex-row items-center">
        <label for="dithering">Dithering:</label>
        <select class="w-full" name="dithering">
            <option value="sierra2">Sierra 2-row</option>
            <option value="bayer">Bayer 4x4</option>
            <option value="none">None</option>
        </select>
    </div>
    <button>
        Generate Braille
        <input type="submit" value=""/>
    </button>
</form>

{#if braille}
    <div
        class="font-sourceCodePro bg-black text-white overflow-auto mt-10 p-2 rounded [line-height:1em] {braille.ok
            ? ''
            : 'border-2 border-red-500'}"
    >
        {#await braille.text() then resp}
            <pre>{resp}</pre>
        {:catch err}
            <p>well this is awkward!</p>
            <pre>{JSON.stringify(err)}</pre>
        {/await}
    </div>
{/if}
