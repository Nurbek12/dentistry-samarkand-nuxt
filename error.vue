<template>
    <NuxtLayout name="index-layout">
        <div class="w-full h-[100vh] flex flex-col justify-center items-center">
            <h1 style="font-size: 80px; font-weight: bold;">
                <span style="color: rgb(109 40 217)">4</span>
                <span>0</span>
                <span style="color: rgb(109 40 217)">4</span>
            </h1>
            <button class="font-bold hover:underline text-4xl" @click="$router.back()">dd</button>
        </div>
    </NuxtLayout>
</template>