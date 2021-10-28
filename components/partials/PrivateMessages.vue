<template>
  <v-list three-line v-if="lastMessages" class="transparent">
    <template v-for="(lastMessage, index) in lastMessages">
      <nuxt-link :to="path + lastMessage.friendId">
        <v-list-item :key="index" class="mt-3 grey darken-2">
          <!--        <v-list-item-avatar>-->
          <!--          <v-img :src="item.avatar"></v-img>-->
          <!--        </v-list-item-avatar>-->
          <v-list-item-content>
            <v-list-item-title v-html="lastMessage.message.sender"></v-list-item-title>
            <v-list-item-subtitle v-html="lastMessage.message.message"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </nuxt-link>
    </template>
  </v-list>
</template>

<script>
import {mapGetters} from "vuex";

export default {

  data(){
    return {
      path: '/messages/',
    }
  },

  computed: {
    ...mapGetters('privateMessages', ['lastMessages']),
  }
}
</script>
