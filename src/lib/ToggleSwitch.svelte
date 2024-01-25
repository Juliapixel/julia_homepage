<script lang="ts">
    export let onToggle: (enabled: boolean) => any;
    export let value: boolean;

    function handleKey(e: KeyboardEvent) {
        if ([" ", "Escape", "Enter"].includes(e.key)) {
            onToggle(value);
        }
    }
</script>

<div on:click={() => onToggle(value)} on:keydown={handleKey} role="switch" tabindex=0 aria-checked="false">
    <div class="w-[50px] h-[50px] bg-red-200" class:enabled={value}>😎</div>
</div>

<style lang="tailwindcss">
    .enabled {
        @apply bg-red-500;
    }
</style>
