<template>
  <section class="friends">
    <v-container>
      <v-row>
        <FriendsScroll class="col-10 pa-0"/>
        <div class="friends__buttons col-2">
          <v-btn class="friends__button" color="green" @click="newFriendModal = true">Add new friend</v-btn>
          <v-btn class="friends__button" color="primary" @click="pendingRequestsModal = true">Pending requests</v-btn>
        </div>
        <AddNewFriendDialog :show="newFriendModal" @close="() => newFriendModal = false"/>
        <PendingRequestsDialog :show="pendingRequestsModal" @close="() => pendingRequestsModal = false" />
      </v-row>
    </v-container>
  </section>
</template>

<script>
import FriendsScroll from "../partials/FriendsScroll";
import AddNewFriendDialog from "../dialogs/AddNewFriendDialog"
import PendingRequestsDialog from "../dialogs/PendingRequestsDialog";

export default {

  components: {
    FriendsScroll,
    AddNewFriendDialog,
    PendingRequestsDialog
  },

  data(){
    return {
      newFriendModal: false,
      pendingRequestsModal: false,
    }
  },

}
</script>
