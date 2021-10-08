<template>
  <section class="room mt-10">
    <v-container>
      <v-row class="align-start" v-if="room && messages">
        <UserList
          :users="room.users"
        />
        <ChatScroll
          :messages="messages"
          class="mx-auto"
        />
      </v-row>
    </v-container>
  </section>
</template>

<script>

  import UserList from '~/components/partials/UserList';
  import ChatScroll from "../partials/ChatScroll";
  import {mapGetters, mapActions} from 'vuex';

  export default {
    components: {
      UserList,
      ChatScroll
    },
    mounted() {
      const id = this.$route.params.id;

      if(!id){
        this.$router.push({ path: '/' });
      }

      this.fetchRoom(id);
    },
    computed: {
      ...mapGetters('rooms', ['room', 'messages'])
    },
    methods: {
      ...mapActions('rooms', ['fetchRoom']),

    }
  }
</script>
