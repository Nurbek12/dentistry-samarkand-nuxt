<template>
    <div>
        <site-bar-variant @open-drawer="drawer = !drawer" :drawer="drawer" />
        <site-nav-drawer :drawer="drawer" @close-drawer="drawer = false" />
        <main class="min-h-[100vh]">
            <slot />
        </main>
        <site-footer />
    </div>
</template>
      
<script setup lang="ts">
const drawer = ref(false)
</script>