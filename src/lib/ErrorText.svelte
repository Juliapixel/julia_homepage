<script lang="ts">
    import { building } from "$app/environment";

    const messages = [
        "erm this is awkward...",
        "there's nothing here...",
        "erm...",
        "orm...",
        "well, THAT just happened...",
        "he's right behind me, isn't he?"
    ];

    let message;
    if (building) {
        message = messages[0]
    } else {
        message = messages[Math.floor(Math.random() * messages.length)];
    }
</script>

<h1>{message}</h1>
