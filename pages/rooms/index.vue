<template>
  <main>
      <TitleSection :title="title"/>
      <RoomsSection/>
  </main>
</template>

<script>
import RoomsSection from '~/components/sections/Rooms';
import TitleSection from '~/components/sections/Title';


export default {
  middleware: 'auth',
  components: {
    RoomsSection,
    TitleSection
  },

  data() {
    return {
      title: 'Rooms',
    }
  }
}
</script>
