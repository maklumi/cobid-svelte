<script>
export let kes;
export let mati;
export let sembuh;
export let ventilator;
export let hospitalised;
export let icu;
export let diuji;
export let updated;
</script>

<style>
  .columns {
    border: solid 1px black;
  }
</style>

<div class="section">
  <div class="container">
    <div class="columns">
      <h2 class="is-3 column">Bilangan kes:{kes}</h2>
      <h2 class="is-3 column">Kematian:{mati}</h2>
      <h2 class="is-3 column">Sembuh:{sembuh}</h2>
      <h2 class="is-3 column">Tarikh :{updated}</h2>
    </div>
  </div>
  <div class="container">
    <div class="columns">
      <h2 class="is-3 column">Diuji:{diuji}</h2>
      <h2 class="is-3 column">Dalam hospital:{hospitalised}</h2>
      <h2 class="is-3 column">Dalam ICU:{icu}</h2>
      <h2 class="is-3 column">Ventilated :{ventilator}</h2>
    </div>
  </div>
</div>
