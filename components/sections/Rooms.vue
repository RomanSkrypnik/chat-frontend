<template>
  <section class="pt-10 pb-10">
    <v-container>
      <v-row class="flex-column">
        <v-list v-if="rooms">
          <v-list-item
            v-for="(item, index) in rooms"
            :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-btn
              @click="enterRoom(item._id)"
            >Enter</v-btn>
          </v-list-item>
        </v-list>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    mounted() {
      this.fetchRooms();
    },
    computed: {
      ...mapGetters('rooms', ['rooms']),
    },
    methods: {
      ...mapActions('rooms', ['fetchRooms']),

      enterRoom(id){
        this.$router.push({ path: `/rooms/${id}`});
      }
    }
  }
</script>
