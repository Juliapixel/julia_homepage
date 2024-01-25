<script lang="ts">
    import DarkToggle from "$lib/DarkToggle.svelte";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import VerticalSeparator from "$lib/VerticalSeparator.svelte";
    import "../app.css"
</script>

<Header>
    <svelte:fragment slot="right">
        <DarkToggle />
    </svelte:fragment>
</Header>
<slot />
<Footer>
    <svelte:fragment slot="links">
        <a href="https://github.com/juliapixel.com">
            <!-- TODO: make it light mode -->
            <img src="/github-mark.svg" alt="Github" class="h-8"/>
        </a>
        <VerticalSeparator height_class="h-6"/>
        <a href="mailto:julia@juliapixel.com" aria-label="Juliapixel.com">
            email
        </a>
    </svelte:fragment>
    <svelte:fragment slot="info">
        <p>{"</>"} with {"<3"} by Julia</p>
        <div class="flex mt-20">
            <p>be gay &ThickSpace;</p><div class="text-lg [animation:spin_250ms_linear_infinite]">🏳️‍⚧️</div>
        </div>
    </svelte:fragment>
</Footer>
