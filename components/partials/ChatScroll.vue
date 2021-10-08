<template>
  <div>
    <ul class="chat-scroll overflow-y-auto grey darken-4"
        v-chat-scroll="{always: false, smooth: true}"
        @v-chat-scroll-top-reached="customMethod"
    >
      <v-list-item class="message"
                   v-for="(message, index) in messages"
                   :key="index"

      >
        <v-list-item-content>
          <v-list-item-title>{{ message.text }}</v-list-item-title>
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
  export default {
    props: {
      messages: {
        type: Array,
        required: true,
        default: () => [],
      }
    },
    data() {
      return {
        message: '',
        // messageRules: [
        //   v => v.length < 1 || console.log(v.length),
        // ],
        socket: null,
        roomId: null
      }
    },
    mounted() {
      this.roomId = this.$route.params.id;

      this.socket = this.$nuxtSocket({
        name: 'work',
        room: this.roomId,
        reconnection: true,
      });

      this.socket.emit('room', { room: this.roomId });
    },
    methods: {

      customMethod() {
        console.log('scrolled');
      },

      sendMessage() {
        const messageData = {
          text: this.message,
          email: this.$auth.user.email,
          room: this.roomId,
        };

        this.socket.emit('send-message', messageData);
      }
    }
  }
</script>
