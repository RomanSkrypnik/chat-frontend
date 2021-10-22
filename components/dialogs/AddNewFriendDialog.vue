<template>
  <div>
    <v-btn class="align-self-start mb-5 green darken-1">+</v-btn>
    <v-dialog

      max-width="500px"
    >
      <v-card>
        <v-card-title>
          <span>Add new friend</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-form
          class="pr-10 pl-7"
        >
          <v-text-field
            v-model="search"
            label="Username"
          />
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";

export default {

  data() {
    return {
      search: '',
    }
  },

  computed: {
    ...mapGetters('friends', ['friendsBySearch'])
  },

  methods: {
    ...mapMutations('friends', ['SET_MODAL_OPENED']),


  },
}
</script>
