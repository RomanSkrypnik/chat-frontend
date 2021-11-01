<template>
  <section class="friends">
    <v-container>
      <v-row>
        <FriendsScroll class="col pa-0"/>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import FriendsScroll from "../partials/FriendsScroll";

export default {

  components: {
    FriendsScroll,
  },


}
</script>
