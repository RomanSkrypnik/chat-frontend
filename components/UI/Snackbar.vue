<template>
  <!--    <v-snackbar-->
  <!--      v-if="message"-->
  <!--      v-model="snackbar"-->
  <!--      :multi-line="multiLine">-->
  <!--      <div class="d-flex">-->
  <!--        <div>{{ message.sender }}</div>-->
  <!--        <div class="ml-4">{{ message.message }}</div>-->
  <!--      </div>-->
  <!--      <template v-slot:action="{ attrs }">-->
  <!--        <v-btn-->
  <!--          color="red"-->
  <!--          text-->
  <!--          v-bind="attrs"-->
  <!--          @click="snackbar = false">Close</v-btn>-->
  <!--      </template>-->
  <!--    </v-snackbar>-->
  <v-snackbar
    class="message-snackbar"
    v-model="snackbar">
    <div class="message-snackbar__inner">
      <div>
        <div class="grey--text">Sender</div>
        <div>Message</div>
      </div>
    </div>
    <template v-slot:action="{ attrs }">
      <v-btn
        class="message-snackbar__close-button"
        color="red"
        text
        v-bind="attrs"
        @click="snackbar = false">x</v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    message: null,
    snackbar: true,
  }),
  mounted() {
    this.$nuxt.$on('snackbar-private-message', (message) => {
      this.message = message;
      this.snackbar = true;
    });
  }
}
</script>
