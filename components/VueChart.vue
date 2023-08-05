<template>
  <div class="w-full">
    <LineChart :chartData="testData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { DoughnutChart, LineChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

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
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Month',
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
        text: 'Value',
        color: '#212121' // Change the y-axis label color to black
      },
      ticks: {
        color: '#212121' // Change the y-axis tick color to black
      }
    }
  }
};
</script>
