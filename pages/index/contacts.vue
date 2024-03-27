<template>
    <div class="w-full">
        <div class="z-10 container px-2 md:px-8 py-16">
            <div class="flex flex-col items-center">
                <div class="text-center pt-20">
                    <h1 class="font-medium text-teal-600 text-3xl">Будем рады услышать вас!</h1>
                    <p class="text-base text-gray-600">
                        Мы ценим каждого пациента, и ваше мнение важно для нас. 
                    </p>
                </div>
            </div>
        </div>
        <div class="relative min-h-[100vh] flex items-end pb-14">
            <div class="container relative z-10 pointer-events-none">
                <site-contact-info />
            </div>
            <div class="top-0 absolute w-full h-full">
                <iframe width="100%" height="100%" id="gmap_canvas"
                    :src="`https://maps.google.com/maps?q=samarkhand,Областная+Стоматологическая+Больница&t=&z=18&ie=UTF8&iwloc=&output=embed`"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'index-layout'
})
</script>