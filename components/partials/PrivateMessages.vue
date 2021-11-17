<template>
  <v-list three-line v-if="lastMessages" class="private-messages transparent"
          v-chat-scroll="{ always: false }"
          v-on:scroll="getMessagesByScroll"
  >
    <template v-for="(lastMessage, index) in lastMessages">
      <nuxt-link :to="path + lastMessage.friend.friendId">
        <v-list-item :key="index" class="private-messages__item transparent-blue-bg">
          <!--        <v-list-item-avatar>-->
          <!--          <v-img :src="item.avatar"></v-img>-->
          <!--        </v-list-item-avatar>-->
          <v-list-item-content>
            <v-list-item-title class="body-1" v-html="lastMessage.friend.login"></v-list-item-title>
            <v-list-item-subtitle class="body-2" v-html="lastMessage.message ? lastMessage.message.message : ''"></v-list-item-subtitle>
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

  methods: {
    getMessagesByScroll() {

    }
  },

  computed: {
    ...mapGetters('privateMessages', ['lastMessages']),
  }
}
</script>
