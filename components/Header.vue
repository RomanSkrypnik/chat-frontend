<template>
  <header class="header dark-bg" style="padding-left: 300px; padding-right: 300px">
    <v-container>
      <v-row class="align-center">
        <div class="header__burger" @click="onBurgerClick">
          <span class="header__burger-delimiter"></span>
        </div>
        <v-col>
          <nuxt-link
            class="header__logo"
            to="/"
          >Real-time chat
          </nuxt-link>
        </v-col>
        <v-col
          class="d-flex justify-center"
          v-if="this.$auth.loggedIn"
        >
          <nav>
            <ul class='d-flex'>
              <li
                class="header__list-item"
                v-for="(menu, index) in menu"
                :key="index">
                <nuxt-link
                  class="header__list-link"
                  :to="menu.link"
                >{{ menu.text }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script>

import UserPhoto from "./UI/UserPhoto";

export default {

  components: {
    UserPhoto
  },

  data() {
    return {
      sidebar: false,
      menu: [
        {
          text: 'Rooms',
          link: '/rooms'
        },
        {
          text: 'About us',
          link: '/about'
        },
        {
          text: 'Help',
          link: '/help',
        }
      ]
    }
  },

  methods: {
    onBurgerClick() {
      this.sidebar = !this.sidebar;
      this.$nuxt.$emit('sidebar', this.sidebar);
    },

  }

}
</script>
