<template>
  <section class="title">
    <h2 class="title__text text-center">{{ title }}</h2>
  </section>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      }
    }
  }
</script>
