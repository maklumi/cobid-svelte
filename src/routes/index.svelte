<script>
  import CovidStat from '../components/Statistik.svelte'
  import Carta from '../components/Carta.svelte'
  import TableContainer from '../components/TableContainer.svelte'
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
