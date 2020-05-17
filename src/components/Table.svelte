<script>
  export let negerinegeri
</script>

<style>
  table {
    width: 100%;
  }
  .section {
    padding: 0.5rem 1.5rem;
  }
</style>

<div class="section">
  <div class="container">
    <table class="table is-bordered is-striped">
      <thead>
        <tr>
          <th>Negeri</th>
          <th>Kes</th>
          <th>Kematian</th>
          <th>Jumlah diuji</th>
        </tr>
      </thead>
      <tbody>
        {#each negerinegeri as negeri (negeri.negeri)}
          <tr>
            <td>
              <a href={negeri.negeri}>{negeri.namapenuh}</a>
            </td>
            <td>{negeri.kes}</td>
            <td>{negeri.mati}</td>
            <td>{negeri.diuji}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
