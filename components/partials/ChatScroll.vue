<template>
  <div class="chat-scroll mx-auto dark-bg col-8">
    <ul class="chat-scroll__messages overflow-y-auto grey darken-4 pa-0 d-flex flex-column justify-end"
        ref="chatScroll"
        v-chat-scroll="{ always: false }"
        v-on:scroll="getMessagesByScroll"
        v-if="messages">
      <v-list-item
        class="chat-scroll__item"
        :class="message.email === $auth.user.email ? 'chat-scroll__item_me transparent-blue-bg' : 'dark-teal-bg'"
        v-for="(message, index) in messages"
        :key="index">
        <v-list-item-content class="d-block">
          <v-list-item-title class="chat-scroll__title">{{ message.text }}</v-list-item-title>
          <v-list-item-subtitle>{{ message.email }}</v-list-item-subtitle>
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

  import {mapActions, mapGetters} from 'vuex';

  export default {

    data() {
      return {
        message: '',
        roomId: null,
        chatScrollHeight: 0,
        // messageRules: [
        //   v => v.length < 1 || console.log(v.length),
        // ],
      }
    },

    mounted() {
      this.roomId = this.$route.params.id;
    },

    methods: {
      ...mapActions('rooms', ['fetchOlderMessages']),

      async getMessagesByScroll() {
        const chatScroll = this.$refs.chatScroll;
        console.log(chatScroll.scrollTop);
        if (chatScroll.scrollTop === 0) {
          this.chatScrollHeight = chatScroll.scrollHeight;
          await this.fetchOlderMessages(this.roomId);
          chatScroll.scrollTop = chatScroll.scrollHeight - this.chatScrollHeight;
        }
      },

      sendMessage() {
        this.$nuxt.$emit('send-room-message', this.roomId, this.$auth.user, this.message);
      },

    },

    computed: {
      ...mapGetters('rooms', ['messages']),
    }
  }
</script>
