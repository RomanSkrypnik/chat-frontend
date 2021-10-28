<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card>
      <v-btn
        class="v-btn--absolute"
        style="right: 0"
        text
        @click="close"
        color="red">X</v-btn>
      <v-card-title>
        <span>Add new friend</span>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-form class="pr-10 pl-7">
        <v-text-field v-model="search" label="Username" @change="searchNewFriends"/>
      </v-form>
      <AddNewFriendsScroll/>
    </v-card>
  </v-dialog>
</template>

<script>

import {mapActions} from "vuex";
import AddNewFriendsScroll from "../partials/AddNewFriendsScroll";

export default {
  name: 'AddNewFriendDialog',

  model: {
    prop: 'show',
  },

  components: {
    AddNewFriendsScroll
  },

  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      search: '',
    }
  },

  methods: {
    ...mapActions('friends', ['fetchUsersBySearch']),

    searchNewFriends(){
      const searchData = {
        search: this.search,
        user: this.$auth.user,
      };

      this.fetchUsersBySearch(searchData);
    },

    close() {
      this.$emit('close');
    }

  },
}
</script>
