<template>
  <section class="account">
    <v-container>
      <v-row>
        <v-col class="account__description-body">
          <UserPhoto/>
          <h2 class="account__description__name mt-3">Login: {{ login }}</h2>
          <h3 class="mt-3">Email: {{ email }}</h3>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>

import UserPhoto from "../UI/UserPhoto";

export default {

  components: {
    UserPhoto,
  },

  data() {
    return {
      login: this.$auth.user.login,
      email: this.$auth.user.email
    }
  }
}
</script>
