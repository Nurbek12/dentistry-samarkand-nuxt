<template>
    <div id="licenses" class="container mx-auto px-2 md:px-8 py-4 rounded">
        <div class="text-center mb-4">
            <h1 class="font-normal text-xl">Лицензии</h1>
            <p class="text-base text-gray-600">
                Далеко-далеко за словесными горами в стране гласных
            </p>
        </div>
        <div class="overflow-x-auto scrollbar-hide w-full rounded-2xl p-4 bg-teal-700 relative border border-teal-700">
            <!-- <button class="left-3 top-[42%] w-[40px] h-[40px] flex items-center justify-center text-lg text-white absolute bg-teal-700 hover:bg-teal-600 active:bg-teal-400 rounded-full">
                &LeftArrow;
            </button> -->
            <div class="flex gap-4 w-max items-center">
                <div class="w-[200px] h-[250px] flex justify-center items-center rounded-xl bg-white" v-for="i in 11" :key="i">
                    {{ i + 1 }}
                </div>
            </div>
            <!-- <button class="right-3 top-[42%] w-[40px] h-[40px] flex items-center justify-center text-lg text-white absolute bg-teal-700 hover:bg-teal-600 active:bg-teal-400 rounded-full">
                &RightArrow;
            </button> -->
        </div>
    </div>
</template>

<script setup lang="ts">
</script>