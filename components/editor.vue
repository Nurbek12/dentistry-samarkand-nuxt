<template>
    <ClientOnly>
        <ckeditor :editor="ClasslicEditor" :config="editorConfig" v-model="editorHtml" />
    </ClientOnly>
</template>

<script setup lang="ts">
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// import '@ckeditor/ckeditor5-build-classic/build/translations/ru'

let editor = ref(null)
let ClasslicEditor = ref()
const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

const editorConfig = reactive({
    language: 'ru'
})

const editorHtml = computed({
    get: () => props.modelValue,
    set: v => emits('update:modelValue', v)
})

if(process.client) {
    editor.value = defineAsyncComponent(() => import('@ckeditor/ckeditor5-vue').then((module: any) => module.component))
    import('@ckeditor/ckeditor5-build-classic').then(e => ClasslicEditor.value = e.default)
}
</script>