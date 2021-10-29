<template>
  <div class="chat-scroll mx-auto grey darken-1 pa-5 col-8">
    <ul class="chat-scroll__messages overflow-y-auto grey darken-4"
        ref="chatScroll"
        v-chat-scroll="{ always: false }"
        v-on:scroll="getMessagesByScroll"
        v-if="messages">
      <v-list-item
        class="message"
        v-for="(message, index) in messages"
        :key="index">
        <v-list-item-content>
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
      <v-btn type="submit">Send</v-btn>
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
