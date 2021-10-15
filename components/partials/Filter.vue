<template>
  <v-form @submit.prevent="searchRooms">
    <v-text-field
      label="search room"
      v-model="filterFields.search"
    />
    <div class="subtitle-1">Topics</div>
    <div class="rooms__dialog-check-body d-flex flex-wrap mt-3">
      <v-checkbox
        v-for="(topic, index) in topics"
        :key="index"
        v-model="filterFields.topics"
        :label="topic.name"
        :value="topic"
        class="rooms__dialog-checkbox col-5"
      ></v-checkbox>
    </div>
    <v-btn
      type="submit"
      class="primary"
    >Search</v-btn>
  </v-form>
</template>

<script>

  import {mapGetters, mapActions} from "vuex";

  export default {

    data(){
      return {
        filterFields: {
          search: '',
          topics: [],
        }
      }
    },

    methods: {
      ...mapActions('rooms', ['fetchRooms']),

      searchRooms(){
        this.fetchRooms(this.filterFields);
      }

    },

    computed: {
      ...mapGetters('rooms', ['topics']),
    }
  }
</script>
