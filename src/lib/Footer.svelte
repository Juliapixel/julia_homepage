<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        links?: Snippet
        info?: Snippet
    }

    let { links, info }: Props = $props();
</script>

<div class="flex flex-row items-center justify-center space-x-2 mt-16">
    {@render links?.()}
</div>
<div class="flex flex-col text-center items-center space-y-3 my-4">
    {@render info?.()}
</div>
