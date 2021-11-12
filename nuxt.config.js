import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - chat-frontend',
    title: 'chat-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-chat-scroll',
    '@/plugins/vuelidate'
  ],

  axios: {
    baseUrl: "http://localhost:5000",
    https: false,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/date-fns',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'nuxt-socket-io',
  ],

  io: {
    server: {
      cors: {
        origin: 'http://localhost:5000/',
        methods: ['GET', 'POST']
      }
    },
    sockets: [
      {
        name: 'main',
        url: 'http://localhost:5000/',
        vuex: {
          mutations: [
            {
              'new-private-message' : 'privateMessages/ADD_NEW_MESSAGE'
            },
            {
              'new-private-message-self' : 'privateMessages/ADD_NEW_MESSAGE'
            },
            {
              'users-online' : 'rooms/SET_ONLINE_USERS',
            },
            {
              'new-room-message' : 'rooms/ADD_NEW_MESSAGE',
            },
          ]
        }
      },
      {
        name: 'work',
        url: 'http://localhost:5000/',
        vuex: {
          mutations: [
            {
              newMessage: 'rooms/ADD_NEW_MESSAGE',
            },
            {
              usersOnline: 'rooms/SET_ONLINE_USERS',
            },
          ],
        }
      },
    ]
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        redirect: {
          login: '/login',
          logout: '/logout',
          home: '/rooms',
          callback: '/login',
        },
        token: {
          property: 'accessToken',
        },
        refreshToken: {
          property: 'refreshToken',
        },
        endpoints: {
          login: {
            url: '/api/auth/login',
            method: 'post',
          },
          logout: {
            url: '/api/auth/logout',
            method: 'post',
          },
          refresh: {
            url: '/api/auth/refresh',
            method: 'get',
          },
        },
      }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    serverMiddleware: ["~/serverMiddleware/socket-io-server.js"],
  }
}
