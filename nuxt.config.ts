export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  devtools: {enabled: true},
  compatibilityDate: '2025-01-12',
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  colorMode: {
    preference: 'retro', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
});