<script context="module">
  import namanegeri from '../data/namaNegeri'
  import permintaan from '../data/mohon'

  export async function preload(page) {
    const negeri = page.params['negeri']
    if (namanegeri.find((it) => it.abbrev === negeri) === undefined) {
      this.error(404, 'negeri tak jumpai')
      return
    }
    try {
      const statnegeri = await permintaan.statNegeri(negeri)
      console.log(JSON.stringify(statnegeri))

      return { negara: page.params['negeri'], statnegeri }
    } catch (error) {}
  }
</script>

<script>
  import CovidStat from '../components/Statistik.svelte'
  import Carta from '../components/Carta.svelte'
  import TableContainer from '../components/TableContainer.svelte'

  export let negara
  export let statnegeri
</script>

<svelte:head>
  <title>{negara}</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Untuk negeri {negara}</h1>
  </div>
</div>

<CovidStat {...statnegeri} />

<Carta />
