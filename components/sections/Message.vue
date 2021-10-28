<template>
  <section class="message">
    <v-container>
      <MessageScroll/>
    </v-container>
  </section>
</template>

<script>
  import {mapActions} from "vuex";
  import MessageScroll from "../partials/MessageScroll";

  export default {
    components: {MessageScroll},
    mounted() {
      const params = {
        user: this.$auth.user,
        friendId: this.$route.params.id,
      };
      this.fetchMessages(params);
    },

    methods: {
      ...mapActions('privateMessages', ['fetchMessages']),
    }
  }
</script>
