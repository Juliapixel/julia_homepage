<script lang="ts">
    import Header from "$lib/Header.svelte";
    import { m } from "$lib/paraglide/messages";
    import RetroBox from "$lib/RetroBox.svelte";
    interface Props {
        children?: import("svelte").Snippet;
    }

    let { children }: Props = $props();
</script>

<Header />
<div class="lg:mx-[20%] mt-12 mb-32">
    <RetroBox
        bottom_right_text={m["footer.love"]()}
        bottom_left_text={`${__GIT_REF__.slice(0, 8)} ${__GIT_BRANCH__}`}
    >
        {@render children?.()}
    </RetroBox>
</div>
