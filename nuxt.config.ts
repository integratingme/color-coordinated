import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        prerender: {
            autoSubfolderIndex: false
        }
    },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    assetsInclude: ['**/*.m4v']
  },
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: 'English',
        flag: '🇺🇸'
      },
      {
        code: 'de',
        file: 'de.json',
        name: 'Deutsch',
        flag: '🇩🇪'
      },
      {
        code: 'pl',
        file: 'pl.json',
        name: 'Polski',
        flag: '🇵🇱'
      }
    ],
    strategy: 'prefix_except_default',
    langDir: 'locales',
    lazy: true,       // Load locale messages lazily (important for route changes)
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }
})