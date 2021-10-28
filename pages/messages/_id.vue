<template>
  <main>
    <TitleSection :title="'Message'" />
    <MessageSection/>
  </main>
</template>

<script>
import TitleSection from "../../components/sections/Title";
import MessageSection from "../../components/sections/Message";
export default {
  components: {MessageSection, TitleSection}
}
</script>
