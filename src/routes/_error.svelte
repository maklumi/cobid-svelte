<script>
  export let status
  export let error
</script>

<style>
  .container {
    margin: 40px;
  }
</style>

<svelte:head>
  <title>Error - {status}</title>
</svelte:head>

{#if status !== 200}
  <div class="container">
    <article class="message is-warning">
      <div class="message-header">
        <p>Page tak dijumpai</p>
      </div>
      <div class="message-body">
        <p>{status} {error.message}</p>
      </div>
      <div class="message-body">
        <a href="/">go back</a>
      </div>
    </article>
  </div>
{/if}
