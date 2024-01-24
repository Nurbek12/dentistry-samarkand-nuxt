<template>
    <div class="h-full">
        <Bar :data="chartdata" />
    </div>
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

const currentMonthDays = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
const { items } = defineProps<{ items: number[] }>()
const chartdata = computed(() => ({
    labels: new Array(currentMonthDays).fill(0).map((_, i) => i + 1),
    responsive: true,
    datasets: [
        {
            label: new Date().toLocaleString('ru-RU', { month: 'long', }),
            backgroundColor: 'rgb(147,51,234)',
            borderColor: 'rgb(147,51,234)',
            data: items,
            // data: new Array(currentMonthDays).fill(0).map((_, i) => Math.floor(Math.random() * 100)),
        },
    ],
}))

</script>