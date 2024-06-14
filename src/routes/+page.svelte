<script lang='ts'>
    let apiResponse: any;
    const sendMail = async () => {
        const res = await fetch('/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        });
        apiResponse = await res.json();
        console.log(apiResponse);
    }
</script>
<h1>Welcome to SvelteKit</h1>
<button on:click={() => sendMail()}>Send Mail</button>

{#if apiResponse}
    <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
{/if}
