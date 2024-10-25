<script lang="ts">
    import { onMount } from "svelte";
    import ToggleSwitch from "./ToggleSwitch.svelte";

    interface Props {
        dark_enabled?: boolean;
    }

    let { dark_enabled = $bindable(false) }: Props = $props();

    onMount(() => {
        const doc = document.documentElement;
        let saved_theme = localStorage.getItem("theme");

        if (saved_theme === "light") {
            dark_enabled = false;
            doc.classList.remove("dark");
        } else {
            dark_enabled = true;
            doc.classList.add("dark");
        }
    });

    function handleToggle(val: boolean) {
        if (val) {
            dark_enabled = false;
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        } else {
            dark_enabled = true;
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
    }
</script>

<ToggleSwitch onToggle={handleToggle} value={dark_enabled} />
