<template>
  <v-app dark>
    <Aside v-if="$auth.loggedIn"/>
    <Nuxt style="padding-left: 300px; padding-right: 300px"/>
    <Snackbar/>
  </v-app>
</template>

<script>
import Aside from "~/components/Aside";
import Header from "../components/Header";
import Snackbar from "../components/UI/Snackbar";

export default {
  components: {
    Snackbar,
    Header,
    Aside
  }
}
</script>
