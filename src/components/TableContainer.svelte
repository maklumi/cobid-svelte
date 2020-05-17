<script>
  import Table from './Table.svelte'
  import TableFilter from './TableFilter.svelte'

  export let data

  $: negeri = data
</script>

<TableFilter />
<Table negerinegeri={data} />
