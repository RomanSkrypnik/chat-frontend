<template>
  <div>
    <v-dialog
      v-model="show"
      max-width="500px">
      <v-card>
        <v-btn
          class="v-btn--absolute"
          style="right: 0"
          text
          color="red"
          @click="closeModal"
        >X</v-btn>
        <v-card-title>
          <span>Create new room</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-form
          @submit.prevent="addNewRoom"
          class="pr-10 pl-7"
        >
          <v-text-field
            label="Room name"
            v-model="newRoomFields.title"
          />
          <v-textarea
            label="Description"
            v-model="newRoomFields.description"
          />
          <v-text-field
            label="Maximal quantity"
            type="number"
            v-model="newRoomFields.maxQuantity"
          />
          <div class="text-lg-h6">Choose the topics of your room</div>
          <div class="rooms__dialog-check-body d-flex flex-wrap mt-3">
            <v-checkbox
              v-for="(topic, index) in topics"
              :key="index"
              v-model="newRoomFields.topics"
              :label="topic.name"
              :value="topic"
              class="rooms__dialog-checkbox col-4"
            ></v-checkbox>
          </div>
          <v-btn
            type="submit"
            class="primary mt-5 mb-5"
          >Create room
          </v-btn>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";

export default {

  model: {
    prop: 'show'
  },

  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      newRoomFields: {
        title: '',
        description: '',
        maxQuantity: 0,
        topics: [],
        email: this.$auth.user.email,
      },
    }
  },

  computed: {
    ...mapGetters('rooms', ['topics']),
  },

  methods: {
    ...mapActions('rooms', ['createRoom']),

    addNewRoom() {
      this.createRoom(this.newRoomFields);
    },

    closeModal() {
      this.$emit('close');
    }
  },
}
</script>
