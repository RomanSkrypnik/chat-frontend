<template>
  <section class="room mt-10">
    <v-container>
      <v-row class="align-start">
        <UserList/>
        <ChatScroll/>
      </v-row>
    </v-container>
  </section>
</template>

<script>

  import UserList from '~/components/partials/UserList';
  import ChatScroll from "../partials/ChatScroll";
  import AddDialog from "../dialogs/AddDialog";

  export default {

    components: {
      UserList,
      ChatScroll,
      AddDialog
    },

  }
</script>
