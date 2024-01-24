<template>
    <div class="relative">
        <Doughnut :data="chartdata" :options="chartoptions"/>
    </div>
</template>

<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

const { items } = defineProps<{ items: {name: string, count: number}[] }>()
const chartdata = computed(() => ({
    labels: items.map((i) => i.name),
    datasets: [
        {
            data: items.map((i) => i.count),
            backgroundColor: ['#FF1744', '#2962FF', '#00E676', '#FDD835', '#9C27B0', '#3F51B5', '#FFFF00', '#009688', '#FF9800', '#795548', '#607D8B'],
        }
    ]
}))
const chartoptions = {
  scales: {
    myScale: {
      type: "logarithmic",
      position: "left",
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
  }
}
</script>