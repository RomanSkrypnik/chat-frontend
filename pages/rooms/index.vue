<template>
  <main>
    <RoomsSection/>
  </main>
</template>

<script>
  import RoomsSection from '~/components/sections/Rooms';

  export default {
    middleware: 'auth',
    components: {
      RoomsSection
    },
  }
</script>
