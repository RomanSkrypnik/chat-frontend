<template>
  <div>
    <v-btn
      @click="addFriend"
      color="green"
      v-if="!requestSent">Add to friends
    </v-btn>
    <v-btn
      @click="declineRequest"
      color="red"
      v-else>Decline request
    </v-btn>
  </div>
</template>

<script>

    export default {
        name: 'AddToFriendsButton',

        props: {
            user: {
                type: Object,
                required: true,
            }
        },

        data() {
            return {
                requestSent: false,
                users: {
                    sender: this.$auth.user,
                    receiver: this.user,
                }
            }
        },


        async mounted() {
            await this.$axios.$post('/api/check-friend-request', this.users)
                .then(added => this.requestSent = added)
                .catch(e => console.error(e));
        },

        methods: {

            async addFriend() {
                this.$nuxt.$emit('send-friend-request', this.users);
                this.requestSent = true;
            },

            async declineRequest() {
                this.$nuxt.$emit('decline-friend-request', this.users);
                this.requestSent = false;
            }
        }
    }
</script>
