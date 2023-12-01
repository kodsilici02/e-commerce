<template>
  <div class="w-full h-full">
    <canvas ref="myChart" width="full" height="full"></canvas>
  </div>
</template>

<script setup>
import { Chart, registerables } from 'chart.js';

const testData = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],

  datasets: [
    {
      data: [30, 40, 60, 20, 5],
      type: 'line',

      backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
      borderColor: '#4470da', // Change the line color to black
      color: '#4470da' // Change the data point and label color to black
    }
  ]
};

onMounted(() => {
  myChart.value.height = myChart.value.width;
  window.addEventListener('resize', () => {
    myChart.value.height = myChart.value.width;
  });
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    myChart.value.height = myChart.value.width;
  });
});

const myChart = ref();
const config = {
  data: testData,
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        display: true,
        title: {
          display: true,

          color: '#212121' // Change the x-axis label color to black
        },
        ticks: {
          color: '#212121' // Change the x-axis tick color to black
        }
      },
      y: {
        display: true,

        ticks: {
          color: '#212121' // Change the y-axis tick color to black
        }
      }
    },
    legend: {
      display: false // Hide the legend
    }
  }
};

onMounted(() => {
  setTimeout(() => {
    const chart = new Chart(myChart.value, config);
  }, 10);
});

Chart.register(...registerables);
</script>
