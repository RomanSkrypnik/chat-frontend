<template>
  <v-form>
    <v-text-field
      @change="fetchFriends"
      label="username"
    />
  </v-form>
</template>

<script>
  export default {
    methods: {
      fetchFriends(){
        console.log('test');      }
    }
  }
</script>
