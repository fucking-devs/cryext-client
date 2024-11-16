<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js';

const chartRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (chartRef.value) {
    new Chart(chartRef.value, {
      type: 'polarArea',
      data: {
        labels: ['USDT', 'AltCoin', 'TON', 'Bitcoin'],
        datasets: [{
          data: [3, 19, 7, 0.0001],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(54, 162, 235)'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          tooltip: {
            callbacks: {
              label: ({ label }) => label // Показываем только название криптовалюты
            }
          }
        }
      }
    });
  }
});
</script>

<template>
  <div class="chart-container">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<style lang="scss" scoped>
.chart-container {
  width: 600px;
  background-color: var(--sidebar-color);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
</style>