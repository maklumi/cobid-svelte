<script context="module">
  import permohonan from '../data/mohon'

  export async function preload() {
    try {
      const usstats = await permohonan.stats()
      return { usstats }
    } catch (error) {
      console.log(error)
    }
  }
</script>

<script>
  import CovidStat from '../components/Statistik.svelte'
  import Carta from '../components/Carta.svelte'
  import TableContainer from '../components/TableContainer.svelte'

  export let usstats

  console.log(usstats, 'usstats')
</script>

<svelte:head>
  <title>Utama</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Pantau Covid19</h1>
  </div>
</div>

<CovidStat />

<Carta />

<TableContainer />
