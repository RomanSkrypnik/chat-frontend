<template>
  <div class="text-right">
    <v-snackbar
      v-if="message"
      v-model="snackbar"
      :multi-line="multiLine">
      <div class="d-flex">
        <div>{{ message.sender }}</div>
        <div class="ml-4">{{ message.message }}</div>
      </div>
      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      multiLine: true,
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
