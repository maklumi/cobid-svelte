<script context="module">
  export async function preload(page) {
    console.log(JSON.stringify(page))
    return { negara: page.params['negeri'] }
  }
</script>

<script>
  import CovidStat from '../components/Statistik.svelte'
  import Carta from '../components/Carta.svelte'
  import TableContainer from '../components/TableContainer.svelte'

  export let negara
</script>

<svelte:head>
  <title>{negara}</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Untuk negeri {negara}</h1>
  </div>
</div>

<CovidStat />

<Carta />
