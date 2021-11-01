<template>
  <div class="chat-scroll mx-auto col-8 dark-bg">
    <ul class="chat-scroll__messages overflow-y-auto grey darken-4 pa-0 d-flex flex-column"
        ref="chatScroll"
        v-chat-scroll="{ always: false }"
        v-on:scroll="getMessagesByScroll"
        v-if="messages">
      <v-list-item
        class="chat-scroll__item"
        v-for="(message, index) in messages"
        :class="message.sender === $auth.user.login ? 'chat-scroll__item_me transparent-blue-bg' : 'dark-teal-bg'"
        :key="index">
        <v-list-item-content class="d-block">
          <v-list-item-title class="chat-scroll__title">{{ message.message }}</v-list-item-title>
          <v-list-item-subtitle>{{ message.sender }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </ul>
    <v-form @submit.prevent="sendMessage">
      <v-text-field
        v-model="message"
        label="message"
      ></v-text-field>
      <v-btn type="submit" class="light-blue-bg">Send</v-btn>
    </v-form>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {

    data() {
      return {
        message: '',
        mainSocket: null,
      }
    },

    computed: {
      ...mapGetters('privateMessages', ['messages']),
    },

    methods: {
      async getMessagesByScroll() {
        // const chatScroll = this.$refs.chatScroll;
        // if (chatScroll.scrollTop === 0) {
        //   this.chatScrollHeight = chatScroll.scrollHeight;
        //   await this.fetchOlderMessages(this.roomId);
        //   chatScroll.scrollTop = chatScroll.scrollHeight - this.chatScrollHeight;
        // }
      },

      sendMessage() {
        const receiver = this.$route.params.id;
        this.$nuxt.$emit('send-private-message', receiver, this.message);
      },

    },
  }
</script>
