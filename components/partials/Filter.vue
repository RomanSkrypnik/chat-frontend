<template>
  <v-form @submit.prevent="searchRooms">
    <v-text-field
      outlined
      label="search room"
      v-model="filterFields.title"
    />
    <v-expansion-panels>
      <v-expansion-panel class="dark-bg">
        <v-expansion-panel-header>Topics</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="rooms__dialog-check-body d-flex flex-wrap mt-3">
            <v-checkbox
              v-for="(topic, index) in topics"
              :key="index"
              v-model="filterFields.topics"
              :label="topic.name"
              :value="topic"
              class="rooms__dialog-checkbox col-5"/>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="d-flex mt-5">
      <v-btn
        type="submit"
        class="transparent-blue-bg mr-4"
      >Search</v-btn>
      <v-btn
        @click="show = true"
        class="align-self-start green-bg"
      >Create new room</v-btn>
    </div>
    <AddDialog :show="show" @close="show = false"/>
  </v-form>
</template>

<script>

import {mapGetters, mapActions} from "vuex";

import AddDialog from "~/components/dialogs/AddDialog";

export default {

  components: {
    AddDialog
  },

  data() {
    return {
      filterFields: {
        title: '',
        topics: [],
      },
      show: false,
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
