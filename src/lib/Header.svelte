<script lang="ts">
</script>

<header
    class="flex flex-row items-center w-full justify-between bg-neutral-400 border-4 border-t-0 border-b-neutral-700 border-r-neutral-700"
>
    <div class="flex flex-row items-center ml-3 space-x-3">
        <slot name="left" />
    </div>
    <div class="flex flex-row items-center mr-3 space-x-3">
        <slot name="right" />
    </div>
</header>
