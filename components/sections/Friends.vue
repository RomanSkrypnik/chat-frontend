<template>
  <section class="friends">
    <v-container>
      <v-row>
        <FriendsScroll class="col-10 pa-0"/>
        <div class="friends__buttons col-2">
          <v-btn color="green">Add new friend</v-btn>
        </div>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  import FriendsScroll from "../partials/FriendsScroll";
  export default {
    components: {FriendsScroll}
  }
</script>
