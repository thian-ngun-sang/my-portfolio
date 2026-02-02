// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss'],
	css: [
		'~/assets/css/main.css',
	],
	runtimeConfig: {
    public: {
      firebaseConfig: process.env.NUXT_PUBLIC_FIREBASE_CONFIG
    }
  },
	plugins: [
    './plugins/firebase.client.ts'
  ]
})
