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
        <span>Pending requests</span>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-list v-for="(user, index) in pendingRequests" :key="index">
        <v-list-item
          class="d-flex justify-space-between mt-5">{{ user.login }}<AcceptRequestButton :user="user"/>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>

import {mapGetters, mapActions} from "vuex";

import AcceptRequestButton from "../UI/buttons/AcceptRequestButton";

export default {

  components: {
    AcceptRequestButton
  },

  model: {
    prop: 'show'
  },

  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      // users: {
      //   sender: this.$auth.user,
      //   receiver:
      // }
    }
  },

  async mounted() {
    await this.fetchPendingRequests(this.$auth.user);
  },

  computed: {
    ...mapGetters('friends', ['pendingRequests']),
  },

  methods: {
    ...mapActions('friends', ['fetchPendingRequests']),

    close() {
      this.$emit('close');
    }
  }

}
</script>
