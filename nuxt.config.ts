// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Thian Ngun Sang | Portfolio',
      meta: [
        { name: 'description', content: 'My app description' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss'],
	css: [
		'~/assets/css/main.css',
	],
	runtimeConfig: {
    public: {
      firebaseConfig: process.env.NUXT_PUBLIC_FIREBASE_CONFIG,
      formspreeURL: process.env.NUXT_PUBLIC_FORMSPREE_URL
    }
  },
	plugins: [
    './plugins/firebase.client.ts'
  ],
	icon: {
		mode: 'remote'
	},
  vite: {
    server: {
      allowedHosts: true  // allows any host
    }
  }
})
