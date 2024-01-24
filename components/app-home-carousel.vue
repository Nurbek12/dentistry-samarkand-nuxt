<template>
    <div class="rounded inset-0 h-full w-full absolute">
      <nuxt-img :src="`/images/carousel-bg-${current}.jpg`" :key="current" class="h-full w-full object-cover relative rounded" />
      <div class="absolute w-full h-full rounded inset-0 bg-gradient-to-r from-purple-600 to-purple-600/50"></div>
      <div class="absolute w-full bottom-[-25px] flex gap-2 justify-center sm:justify-end px-2">
        <div v-for="i in 3" :key="i" class="border-2 border-purple-600 w-4 h-4 rounded-full cursor-pointer transition-all" :class="current==i?'bg-purple-600':'bg-white'" @click="current=i"></div>
      </div>
    </div>
</template>

<script setup lang="ts">
const current = ref(1)

onMounted(() => {
  setInterval(() => {
    current.value++
    if(current.value > 3) current.value = 1
  }, 5000)
})
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>