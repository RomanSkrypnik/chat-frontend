<template>
  <div class="add-new-friends">
    <v-container>
      <ul v-for="(user, index) in friendsBySearch" :key="index" class="pa-4">
        <li class="d-flex justify-space-between align-center">{{ user.login }}<AddToFriendsButton :user="user"/></li>
      </ul>
    </v-container>
  </div>
</template>

<script>

import {mapGetters} from "vuex";
import AddToFriendsButton from "../UI/buttons/AddToFriendsButton";

export default {

  components: {
    AddToFriendsButton
  },

  computed: {
    ...mapGetters('friends', ['friendsBySearch'])
  }

}
</script>
