<template>
<div class="fixed top-0 z-50 w-[100vw] h-[100vh] bg-white flex justify-center items-center">
    <div class="animate-spin">
        <LuLoader2 class="text-6xl" />
    </div>
</div>
</template>

<script setup lang="ts">
import { LuLoader2 } from "@kalimahapps/vue-icons"
</script>