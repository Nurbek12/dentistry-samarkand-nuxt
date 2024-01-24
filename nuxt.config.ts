// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@pinia/nuxt', '@nuxtjs/i18n'],
  // '@nuxt/ui',
  pinia: {
    storesDirs: ['./store/**']
  },
  css: ['./assets/css/tailwind.css'],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  runtimeConfig: {
    imagekit: {
      publicKey: process.env.IMAGEKIT_PUB_KEY,
      privateKey: process.env.IMAGEKIT_PPV_KEY,
      urlEndpoint: process.env.IMAGEKIT_URL_END
    },
    jwtSecret: process.env.JWT_SECRET,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'shadcn-nuxt'],
  // shadcn: {
  //   prefix: '',
  //   componentDir: './components/ui'
  // }
})