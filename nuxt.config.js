const pkg = require('./package')

module.exports = {
  mode: 'universal',
  router: {
    base: '/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_651366_chsjhvojtwf.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/stylus/common',
    '~/assets/animate.min'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/mixins',
    { src: '~/plugins/compents.js', ssr: false },
    { src: '~/plugins/swiper.js', ssr: false }
    // { src: "~/plugins/picZoom.js", ssr: false }
    // { src: "~/plugins/echarts.js", ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'vue-ctk-date-time-picker/nuxt',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  buildModules: ['@nuxt/typescript-build'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          // test: /\.(js|vue)$/,
          // test: /\.js$/,
          loader: 'eslint-loader',
          test: /\.ts$/,
          exclude: /(node_modules)/,
          options: {
            typeCheck: {
              eslint: true
            },
            ignoreNotFoundWarnings: true,
            loaders: {
              ts: {
                silent: true
              },
              tsx: {
                silent: true
              }
            }
          }
        })
      }
    }
  }
}
