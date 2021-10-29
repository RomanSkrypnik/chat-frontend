<template>
  <div class="friends-scroll">
    <v-container>
      <v-form class="friends-scroll__form">
        <v-text-field
          v-model="search"
          @change="fetchFriendsBySearch"
          outlined
          background-color="grey darken-3"
          color="white"
          label="search"
        />
        <v-list class="friends-scroll__list d-flex align-start overflow-auto flex-wrap align-content-start" style="background-color: #171a21">
          <v-list-item class="friends-scroll__item d-flex pa-3" v-for="(friend, index) in friends" :key="index" style="background-color: #1b2838">
            <img
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
              alt="Photo" class="friends-scroll__image">
            <v-list-item-content>
              <h2 class="text-body-1">{{ friend.login }}</h2>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-form>
    </v-container>
  </div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";

export default {

  data() {
    return {
      search: '',
      user: this.$auth.user,
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
