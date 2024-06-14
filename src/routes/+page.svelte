<script lang='ts'>
    let apiResponse: any;
    let loading = false;
    const sendMail = async () => {
        loading = true;
        const res = await fetch('/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        });
        loading = false;
        apiResponse = await res.json();
    }
</script>
<h1>Welcome to SvelteKit</h1>
<button on:click={() => sendMail()}>Send Mail</button>

{#if apiResponse}
    <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
{/if}

{#if loading}
    Sending Mail....
{/if}
