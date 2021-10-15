<template>
  <section class="rooms">
    <v-container>
      <v-row class="flex-nowrap">
        <div class="col-9">
          <v-btn
            @click="dialog = !dialog"
            class="align-self-start mb-5 green darken-1"
          >+
          </v-btn>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <v-card>
              <v-btn
                class="v-btn--absolute"
                style="right: 0"
                text
                color="red"
                @click="dialog = false"
              >
                X
              </v-btn>
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
          <v-list
            v-if="rooms"
            class="row transparent justify-space-between"
          >
            <v-list-item
              v-for="(item, index) in rooms"
              :key="index"
              class="mt-3 grey darken-3 col-5"
              style="border-radius: 10px"
            >
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-btn
                @click="enterRoom(item._id)"
              >Enter
              </v-btn>
            </v-list-item>
          </v-list>
        </div>
        <FilterComponent />
      </v-row>
    </v-container>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import FilterComponent from "~/components/partials/Filter";

export default {

  components: {
    FilterComponent
  },

  data() {
    return {
      dialog: false,
      newRoomFields: {
        title: '',
        description: '',
        maxQuantity: 0,
        topics: [],
        email: this.$auth.user.email,
      },
    }
  },

  mounted() {
    this.fetchRooms();
    this.fetchTopics();
  },

  computed: {
    ...mapGetters('rooms', ['rooms', 'topics']),

  },

  methods: {
    ...mapActions('rooms', ['fetchRooms', 'createRoom', 'fetchTopics']),

    enterRoom(id) {
      this.$router.push({path: `/rooms/${id}`});
    },

    addNewRoom() {
      this.createRoom(this.newRoomFields);
    },
  },

}
</script>
