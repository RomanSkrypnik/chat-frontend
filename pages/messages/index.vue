<template>
  <main>
    <TitleSection :title="'Messages'"/>
    <MessagesSection/>
  </main>
</template>

<script>
  import MessagesSection from "../../components/sections/Messages";
  import TitleSection from "../../components/sections/Title";
  export default {
    components: {
      TitleSection,
      MessagesSection
    }
  }
</script>
