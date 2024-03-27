<template>
    <div class="w-full">
        <div class="container px-2 md:px-8 py-16">
            Equipment {{ $route.params.id }}
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'index-layout'
})
</script>