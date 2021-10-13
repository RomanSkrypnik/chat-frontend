<template>
  <nuxt-link class="user-photo" to="/account">
    <img src="@/assets/images/test/unnamed.jpg" alt="photo" class="user-photo__image"/>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      photo: {

      }
    }
  }
</script>
