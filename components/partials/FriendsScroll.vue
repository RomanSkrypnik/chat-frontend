<template>
  <div class="friends-scroll">
    <v-container>
      <div class="friends-scroll__top-line transparent-blue-bg">
        <h3>Your friends</h3>
        <div class="friends-scroll__buttons d-flex">
          <v-btn class="friends-scroll__button green-bg" @click="newFriendModal = true">Add new friend</v-btn>
          <v-btn class="friends-scroll__button transparent-blue-bg" @click="pendingRequestsModal = true">Pending requests</v-btn>
        </div>
      </div>
      <v-form class="friends-scroll__form mt-3">
        <v-text-field
          v-model="search"
          @change="fetchFriendsBySearch"
          outlined
          background-color="grey darken-3"
          color="white"
          label="search"
        />
      </v-form>
      <v-list
        class="friends-scroll__list d-flex align-start overflow-auto flex-wrap align-content-start dark transparent pa-0 mt-5">
        <v-list-item class="friends-scroll__item d-flex dark-bg" v-for="(friend, index) in friends" :key="index">
          <img
            src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            alt="Photo" class="friends-scroll__image">
          <v-list-item-content>
            <h2 class="text-body-1">{{ friend.login }}</h2>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
    <AddNewFriendDialog :show="newFriendModal" @close="() => newFriendModal = false"/>
    <PendingRequestsDialog :show="pendingRequestsModal" @close="() => pendingRequestsModal = false" />
  </div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";

import AddNewFriendDialog from "../dialogs/AddNewFriendDialog"
import PendingRequestsDialog from "../dialogs/PendingRequestsDialog";

export default {

  components: {
    AddNewFriendDialog,
    PendingRequestsDialog
  },

  data() {
    return {
      search: '',
      user: this.$auth.user,
      newFriendModal: false,
      pendingRequestsModal: false,
    }
  },

  mounted() {
    this.fetchMyFriends({user: this.user});
  },

  computed: {
    ...mapGetters('friends', ['friends']),
  },

  methods: {
    ...mapActions('friends', ['fetchMyFriends', 'fetchMyFriendsBySearch']),

    fetchFriendsBySearch() {
      const params = {
        user: this.user,
        search: this.search,
      };

      this.fetchMyFriendsBySearch(params);
    }
  }
}
</script>
