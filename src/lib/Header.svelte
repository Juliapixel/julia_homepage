<script lang="ts">

</script>

<header class="flex flex-row items-center w-full justify-between dark:bg-zinc-800 bg-zinc-100 dark:border-b dark:border-b-zinc-700 shadow-sm ">
    <div class="flex flex-row items-center ml-3 space-x-3">
        <slot name="left" />
    </div>
    <div class="flex flex-row items-center mr-3 space-x-3">
        <slot name="right" />
    </div>
</header>
