<template>
  <section class="messages">
    <v-container>
      <PrivateMessages/>
    </v-container>
  </section>
</template>

<script>
import {mapActions} from "vuex";
import PrivateMessages from '~/components/partials/PrivateMessages';

export default {

  name: 'MessagesSection',

  components: {
    PrivateMessages
  },

  mounted() {
    this.fetchLastMessages({receiver: this.$auth.user});
  },

  methods: {
    ...mapActions('privateMessages', ['fetchLastMessages']),
  },

  data: () => ({
    items: [
      {header: 'Today'},
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {divider: true, inset: true},
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      {divider: true, inset: true},
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      {divider: true, inset: true},
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      {divider: true, inset: true},
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
  }),
}
</script>
