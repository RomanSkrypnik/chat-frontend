<template>
  <v-form @submit.prevent="searchRooms">
    <v-text-field
      color="indigo darken-3"
      outlined
      label="search room"
      v-model="filterFields.title"
    />
    <v-expansion-panels>
      <v-expansion-panel class="indigo darken-3">
        <v-expansion-panel-header>Topics</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="rooms__dialog-check-body d-flex flex-wrap mt-3">
            <v-checkbox
              v-for="(topic, index) in topics"
              :key="index"
              v-model="filterFields.topics"
              :label="topic.name"
              :value="topic"
              class="rooms__dialog-checkbox col-5" />
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-btn
      type="submit"
      class="indigo darken-3 mt-5"
    >Search
    </v-btn>
  </v-form>
</template>

<script>

import {mapGetters, mapActions} from "vuex";

export default {

  data() {
    return {
      filterFields: {
        title: '',
        topics: [],
      }
    }
  },

  methods: {
    ...mapActions('rooms', ['fetchRoomsBySearch']),

    searchRooms() {
      this.fetchRoomsBySearch(this.filterFields);
    },
  },

  computed: {
    ...mapGetters('rooms', ['topics']),
  }
}
</script>
