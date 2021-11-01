<template>
  <v-app class="light-blue-bg">
    <Header/>
    <Aside/>
    <Nuxt/>
    <Snackbar/>
  </v-app>
</template>

<script>
import Aside from "~/components/Aside";
import Header from "../components/Header";
import Snackbar from "../components/UI/Snackbar";

export default {

  data() {
    return {
      mainSocket: this.$nuxtSocket({
        name: 'main',
        teardown: false,
        reconnection: true,
      }),
    }
  },

  created() {
    this.mainSocket.emit('main-connect', this.$auth.user);
    this.clientEmits();
    this.socketEvents();
  },

  methods: {

    clientEmits() {
      this.$nuxt.$on('send-private-message', (receiver, message) => {
        this.mainSocket.emit('send-private-message', receiver, message);
      });

      this.$nuxt.$on('join-room', (roomId, user) => {
        this.mainSocket.emit('join-room', roomId, user);
      });

      this.$nuxt.$on('send-room-message', (roomId, user, message) => {
        this.mainSocket.emit('send-room-message', roomId, user, message);
      });

      this.$nuxt.$on('leave-room', (roomId, user) => {
        this.mainSocket.emit('leave-room', roomId, user);
      });
    },

    socketEvents() {

      this.mainSocket.on('new-private-message', (message) => {
        this.$nuxt.$emit('snackbar-private-message', message);
      });
    }
  },

  components: {
    Snackbar,
    Header,
    Aside
  },

}
</script>
