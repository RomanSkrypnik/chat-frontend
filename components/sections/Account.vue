<template>
  <section class="account">
    <v-container>
      <v-row>
        <v-col class="account__description-body">
          <UserPhoto/>
          <h2 class="account__description__name">Koksal Baba</h2>
          <h3></h3>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>

  import UserPhoto from "../UI/UserPhoto";

  export default {
    components: {
      UserPhoto,
    }
  }
</script>
