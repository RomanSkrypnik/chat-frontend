<template>
  <section class="room mt-10">
    <v-container>
      <v-row class="align-start" v-if="room && messages">
        <UserList/>
        <ChatScroll
          :messages="messages"
          :socket="roomSocket"
          class="mx-auto"
          style="flex-grow: 0.6"
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

    props: {
      roomSocket: {
        type: Object,
        required: true,
      }
    },

    data() {
      return {
        email: null,
      }
    },

    mounted() {
      this.roomId = this.$route.params.id;
      this.email = this.$auth.user.email

      if (!this.roomId) {
        this.$router.push({path: '/'});
      }

      this.roomSocket.emit('room', {roomId: this.roomId, user: this.$auth.user});

      this.fetchRoom(this.roomId);
      this.fetchMessages(this.roomId);
    },

    computed: {
      ...mapGetters('rooms', ['room', 'messages'])
    },

    methods: {
      ...mapActions('rooms', ['fetchRoom', 'fetchMessages']),
    },

  }
</script>
