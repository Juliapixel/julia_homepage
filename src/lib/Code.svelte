<script lang="ts">
    interface Props {
        code: string;
    }

    let { code }: Props = $props();
</script>

<div
    class="p-2 inline-flex max-w-full flex-nowrap border-4 bg-neutral-400 border-b-neutral-700 border-r-neutral-700"
>
    <div
        class="p-5 overflow-auto [text-shadow:none] text-sm bg-neutral-800 text-white border-t-neutral-700 border-l-neutral-700 border-4"
    >
        <pre class="font-source-code-pro">{code}</pre>
    </div>
</div>
