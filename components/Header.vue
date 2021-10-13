<template>
  <header class="header grey darken-4">
    <v-container>
      <v-row class="align-center">
        <v-col>
          <nuxt-link
            class="header__logo"
            to="/"
          >Real-time chat</nuxt-link>
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
                >{{ menu.text }}</nuxt-link>
              </li>
            </ul>
          </nav>
        </v-col>
        <v-col
          class="col-2 d-flex align-center justify-space-around"
          v-if="this.$auth.loggedIn"
        >
          <UserPhoto/>
          <v-btn
            @click="logout"
          >Log out</v-btn>
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
      async logout(){
        await this.$auth.logout();

        await this.$router.push({path: '/login'});
      }
    }
  }
</script>
