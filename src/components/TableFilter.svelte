<script>
  export let namanegeri = ''
  export let susunguna = 'name'
</script>

<style>
  input,
  .select,
  select {
    width: 100%;
  }
  .column {
    padding-left: 0;
  }
</style>

<div class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <input
          class="input"
          type="text"
          placeholder="Tapis ikut negeri"
          bind:value={namanegeri} />
      </div>
      <div class="column is-6">
        <div class="select">
          <select bind:value={susunguna}>
            <option value="nama">Ikut nama negeri</option>
            <option value="kes">Bilangan kes</option>
            <option value="mati">Kes kematian</option>
            <option value="diuji">Diuji</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>
