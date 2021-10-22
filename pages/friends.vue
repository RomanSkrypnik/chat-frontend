<template>
  <main>
    <TitleSection :title="title" />
    <FriendsSection />
  </main>
</template>

<script>
  import TitleSection from "../components/sections/Title";
  import FriendsSection from "../components/sections/Friends";
  export default {
    components: {
      FriendsSection,
      TitleSection,
    },
    data(){
      return {
        title: 'Friends'
      }
    }
  }
</script>
