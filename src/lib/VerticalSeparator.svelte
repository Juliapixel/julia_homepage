<script lang="ts">
    interface Props {
        height_class?: string;
    }

    let { height_class = "" }: Props = $props();
</script>

<div
    class="{height_class} border-r dark:border-neutral-700 border-neutral-400"
></div>
