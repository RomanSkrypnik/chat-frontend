<template>
  <div class="user-list">
    <h2 class="title">Users</h2>
    <v-list>
      <v-list-item
        v-for="(user, index) in users"
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

  export default {
    props: {
      users: {
        type: Array,
        required: true,
        default: () => [],
      }
    }
  }
</script>

