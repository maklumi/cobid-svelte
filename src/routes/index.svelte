<script context="module">
  import permohonan from '../data/mohon'

  export async function preload() {
    try {
      const usstats = await permohonan.stats()
      const sejarah = await permohonan.sejarahHarian()
      const datanegeri = await permohonan.dataNegeriNegeri()
      return { usstats, sejarah, datanegeri }
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
  export let sejarah
  export let datanegeri
</script>

<svelte:head>
  <title>Utama</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Pantau Covid19</h1>
  </div>
</div>

<CovidStat {...usstats} />

<Carta datalepas={sejarah} tajuk="Covid di US" />

<TableContainer data={datanegeri} />
