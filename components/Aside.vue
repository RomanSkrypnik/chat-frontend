<template>
  <v-card>
    <v-navigation-drawer
      fixed
      permanent
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img :src="`http://localhost:5000/public/images/users/${$auth.user.photo}`">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ $auth.user.email }}</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <nuxt-link :to="item.link" class="d-flex">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="grey--text text--darken-1">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </nuxt-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Rooms',
          icon: 'mdi-account-group',
          link: '/rooms',
        },
        {
          title: 'Friends',
          icon: 'mdi-human-male-female',
          link: '/friends'
        },
        {
          title: 'Messages',
          icon: 'mdi-message-text-outline',
          link: '/messages',
        },
        {
          title: 'About us',
          icon: 'mdi-information',
          link: '/about',
        },
        {
          title: 'Help',
          icon: 'mdi-help-circle-outline',
          link: '/help',
        },
        {
          title: 'Logout',
          icon: 'mdi-exit-to-app',
          link: '/logout'
        }
      ],
    }
  },
}
</script>
