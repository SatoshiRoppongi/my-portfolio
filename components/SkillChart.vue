<template>
  <UAccordion type="multiple" :items="chartDataList" class="text-3xl">
    <template #content="{ item }">
      <Bar :data="item" :options="chartOptions" />
    </template>
  </UAccordion>
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartDataList = [
  {
    label: 'フロントエンド',
    icon: 'i-grommet-icons-code',
    labels: ['HTML/CSS', 'JavaScript', 'TypeScript', 'Vue2/3', 'Nuxt2/3', 'bootstrapVue', 'Tailwind', 'Flutter(Dart)'],
    datasets: [
      {
        label: '経験年数',
        backgroundColor: '#3b82f6',
        data: [5.5, 5, 1, 5, 10, 4, 2, 3]
      }
    ]
  },
  {
    label: 'バックエンド',
    icon: 'i-grommet-icons-document-config',
    labels: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Shellscript', 'Docker', 'AWS', 'Nuxt'],
    datasets: [
      {
        label: '経験年数',
        backgroundColor: '#2e8b57',
        data: [7, 4, 1, 5, 10, 4, 2, 3]
      }
    ]
  },
  {
    label: 'インフラ/クラウドサービス',
    icon: 'i-grommet-icons-cloud',
    labels: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Shellscript', 'Docker', 'AWS', 'Nuxt'],
    datasets: [
      {
        label: '経験年数',
        backgroundColor: '#f0e68c',
        data: [7, 4, 1, 5, 10, 4, 2, 3]
      }
    ]
  },
  {
    label: 'その他',
    icon: 'i-grommet-icons-personal-computer',
    labels: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Shellscript', 'Docker', 'AWS', 'Nuxt'],
    datasets: [
      {
        label: '経験年数',
        backgroundColor: '#ff69b4',
        data: [7, 4, 1, 5, 10, 4, 2, 3]
      }
    ]
  },
]

const chartOptions = {
  indexAxis: 'y',
  animation: {
    duration: 1000,
    easing: 'easeOutQuart'
  },
  responsive: true,
  plugins: {
    legend: { display: false }
  },
  scales: {
    x: {
      beginAtZero: true,
      ticks: { stepSize: 1 }
    }
  }
}
</script>
