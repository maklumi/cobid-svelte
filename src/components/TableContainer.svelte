<script>
  import Table from './Table.svelte'
  import TableFilter from './TableFilter.svelte'

  export let data
  let susunguna = 'name'
  let namanegeri = ''
  $: negeri = saringsusun(data, namanegeri, susunguna)

  function saringsusun(negerinegeri, nama, susunguna) {
    const negeribertapis = negerinegeri.filter((it) => {
      return (
        namanegeri === '' ||
        it.namapenuh.toLowerCase().indexOf(namanegeri.toLowerCase()) > -1
      )
    })

    if (susunguna !== 'name') {
      return negeribertapis.sort((a, b) => {
        return +b[susunguna].replace(',', '') - +a[susunguna].replace(',', '')
      })
    }

    return negeribertapis
  }
</script>

<h1>{namanegeri} {susunguna}</h1>
<TableFilter bind:namanegeri bind:susunguna />
<Table negerinegeri={negeri} />
