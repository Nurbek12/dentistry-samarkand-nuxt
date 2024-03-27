<template>
    <div class="my-4 p-4 rounded-2xl  flex items-start gap-3" :class="props.extra_class||''">
        <slot name="icon" />
        <div>
            <p class="font-medium text-lg" v-show="props.title">{{ props.title }}</p>
            
            <slot />
    
            <div v-html="props.html_content||''"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string,
    html_content?: string,
    extra_class?: string
}>()
</script>