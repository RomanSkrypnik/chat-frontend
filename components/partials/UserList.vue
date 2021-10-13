<template>
  <div class="user-list">
    <h2 class="title">Users in this room</h2>
    <v-list>
      <v-list-item
        v-for="(user, index) in onlineUsers"
        :key="index"
      >
        <v-list-item-content>
          <v-list-item-title>{{ user.email }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters('rooms', ['onlineUsers'])
    }
  }
</script>

