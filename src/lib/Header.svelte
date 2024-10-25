<script lang="ts">
    interface Props {
        left?: import('svelte').Snippet;
        right?: import('svelte').Snippet;
    }

    let { left, right }: Props = $props();
</script>

<header
    class="flex flex-row items-center w-full justify-between bg-neutral-400 border-4 border-t-0 border-b-neutral-700 border-r-neutral-700"
>
    <div class="flex flex-row items-center ml-3 space-x-3">
        {@render left?.()}
    </div>
    <div class="flex flex-row items-center mr-3 space-x-3">
        {@render right?.()}
    </div>
</header>
