<template>
  <section class="rooms">
    <v-container>
      <v-row class="flex-nowrap justify-space-between">
        <div class="col-8">
          <RoomsList/>
        </div>
        <FilterComponent class="col-4"/>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import {mapActions} from 'vuex';
import FilterComponent from "~/components/partials/Filter";
import RoomsList from "~/components/partials/RoomsList";

export default {

  components: {
    FilterComponent,
    RoomsList,
  },

  mounted() {
    this.fetchRooms();
    this.fetchTopics();
  },

  methods: {
    ...mapActions('rooms', ['fetchRooms', 'createRoom', 'fetchTopics']),
  },
}
</script>
