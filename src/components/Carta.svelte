<script>
  import { onMount, onDestroy } from 'svelte'
  import Carta from 'chart.js'

  export let datalepas
  export let tajuk

  let sembunyi = false
  let elemencarta
  let cartagaris

  onMount(() => {
    if (datalepas && document.body.clientWidth > 380) {
      lukiscarta()
      return
    }
    sembunyi = true
  })

  onDestroy(() => {
    if (cartagaris) {
      cartagaris.destroy()
    }
  })

  function lukiscarta() {
    cartagaris = new Carta(elemencarta.getContext('2d'), {
      type: 'line',
      data: {
        datasets: datalepas,
      },
      options: {
        responsive: true,
        tooltips: {
          callbacks: {
            label: function (itemtooltip, data) {
              let label = data.datasets[itemtooltip.datasetIndex].label
              label += ': '

              label += itemtooltip.yLabel.toLocaleString()
              return label
            },
          },
        },
        title: {
          display: true,
          text: tajuk,
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                parser: 'D/M/YY',
                tooltipFormat: 'll',
              },
              scaleLabel: {
                display: true,
                labelString: 'Tarikh',
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
              },
              ticks: {
                beginAtZero: true,
                userCallback: function (value, index, values) {
                  return value.toLocaleString()
                },
              },
            },
          ],
        },
      },
    })
  }
</script>

{#if !sembunyi}
  <div class="container">
    <canvas bind:this={elemencarta} />
  </div>
{/if}
