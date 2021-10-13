<template>
  <main>
    <Room
      :room-socket="roomSocket"
    />
  </main>
</template>

<script>
  import Room from "../../components/sections/Room";

  export default {

    components: {Room},

    data() {
      return {
        roomSocket: this.$nuxtSocket({
          name: 'work',
          room: this.$route.params.id,
          reconnection: true,
        }),
      }
    },

    beforeRouteLeave(to, from, next) {
      this.roomSocket.emit('userLeft', {
        user: this.$auth.user,
        roomId: this.$route.params.id
      });
      next();
    },

  }
</script>
