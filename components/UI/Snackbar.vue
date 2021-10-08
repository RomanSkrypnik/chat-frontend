<template>
  <div class="text-center">
    <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
    >
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        default: '',
      },
    },
    data: () => ({
      multiLine: true,
      snackbar: false,
    }),
    mounted() {
      this.$nuxt.$on('error-message', () => {
        this.snackbar = true;
      })
    }
  }
</script>
