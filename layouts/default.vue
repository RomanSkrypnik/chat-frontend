<template>
  <v-app dark>
    <Header/>
    <Nuxt/>
    <Snackbar/>
  </v-app>
</template>

<script>

  import Header from "../components/Header";
  import Snackbar from "../components/UI/Snackbar";

  export default {
    components: {
      Snackbar,
      Header
    }
  }
</script>
