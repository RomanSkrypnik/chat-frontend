<template>
  <v-btn color="green" @click="onAcceptFriendRequest">Add to friends</v-btn>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: 'AcceptRequestButton',

  props: {
    user: {
      type: Object,
      required: true,
    }
  },

  data() {
    return {
      users: {
        sender: this.user,
        receiver: this.$auth.user,
      }
    }
  },

  methods: {
    ...mapActions('friends', ['acceptFriendRequest']),

    onAcceptFriendRequest(){
      this.acceptFriendRequest(this.users);
    }
  }


}
</script>
