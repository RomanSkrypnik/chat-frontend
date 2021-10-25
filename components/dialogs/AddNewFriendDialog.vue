<template>
  <v-dialog v-model="modal" max-width="500px">
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

  computed: {
    modal: {
      get() {
        return this.show;
      },
      set(value) {
        this.$nuxt.$emit('')
      }
    }
  },

  data() {
    return {
      search: '',
    }
  },

  methods: {
    ...mapActions('friends', ['fetchFriendsBySearch']),

    searchNewFriends(){
      this.fetchFriendsBySearch(this.search);
    },

    close() {
      this.$emit('close');
    }

  },
}
</script>
