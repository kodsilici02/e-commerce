<template>
  <canvas ref="myChart" width="full" height="full"></canvas>
</template>

<script setup>
import { Chart, registerables } from 'chart.js';

const testData = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
  datasets: [
    {
      data: [30, 40, 60, 20, 5],
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

const myChart = ref();
const config = {
  type: 'line',
  data: testData,
  options: {
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
        title: {
          display: true,

          color: '#212121' // Change the y-axis label color to black
        },
        ticks: {
          color: '#212121' // Change the y-axis tick color to black
        }
      }
    }
  }
};

onMounted(() => {
  const chart = new Chart(myChart.value, config);
});

Chart.register(...registerables);
</script>
