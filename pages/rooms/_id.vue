<template>
  <main>
    <Room/>
  </main>
</template>

<script>
  import Room from "../../components/sections/Room";
  import {mapActions, mapGetters} from "vuex";

  export default {

    components: {Room},

    data() {
      return {
        user: this.$auth.user,
        roomId: this.$route.params.id
      }
    },

    mounted() {

      if (!this.roomId) {
        this.$router.push({path: '/rooms'});
      }

      this.fetchRoom(this.roomId);
      this.fetchMessages(this.roomId);

      this.$nuxt.$emit('join-room', this.roomId, this.user);
    },

    computed: {
      ...mapGetters('rooms', ['room', 'messages'])
    },

    methods: {
      ...mapActions('rooms', ['fetchRoom', 'fetchMessages']),
    },

    beforeRouteLeave(to, from, next) {
      this.$nuxt.$emit('leave-room', this.roomId, this.$auth.user);
      next();
    },

  }
</script>
