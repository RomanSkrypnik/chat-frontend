<template>
  <v-list
    v-if="rooms"
    class="rooms-list row transparent justify-space-between align-start"
  >
    <v-list-item
      v-for="(room, index) in rooms"
      :key="index"
      class="mt-3 indigo darken-3 flex-column align-stretch pa-5"
      style="border-radius: 10px"
    >
      <div class="d-flex align-center">
        <v-list-item-content>
          <v-list-item-title class="rooms-list__title">{{ room.title }}</v-list-item-title>
          <v-list-item-subtitle class="rooms-list__subtitle">{{ room.description }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-btn
          @click="enterRoom(room._id)"
        >Enter
        </v-btn>
      </div>
      <ul class="d-flex pa-0">
        <li
          v-for="(topic, index) in room.topics"
          :key="index"
          class="rooms-list__topic mr-2"
        >{{ topic.name }}</li>
      </ul>
    </v-list-item>
  </v-list>
</template>

<script>


  import {mapGetters} from "vuex";

  export default {

    computed: {
      ...mapGetters('rooms', ['rooms']),
    },

    methods: {

      enterRoom(id) {
        this.$router.push({path: `/rooms/${id}`});
      },

    }
  }


</script>
