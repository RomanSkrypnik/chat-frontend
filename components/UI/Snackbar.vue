<template>
  <v-snackbar
    bottom
    right
    class="message-snackbar"
    v-if="message"
    v-model="snackbar">
    <div class="message-snackbar__inner">
      <div>
        <div class="grey--text">{{ message.sender }}</div>
        <div>{{ message.message }}</div>
      </div>
    </div>
    <template v-slot:action="{ attrs }">
      <v-btn
        class="message-snackbar__close-button"
        color="red"
        text
        v-bind="attrs"
        @click="snackbar = false">x
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    message: null,
    snackbar: false,
  }),
  mounted() {
    this.$nuxt.$on('snackbar-private-message', (message) => {
      this.message = message;
      this.snackbar = true;
    });
  }
}
</script>
