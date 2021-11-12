<template>
  <main>
    <RegisterForm/>
  </main>
</template>

<script>
  import RegisterForm from "../components/forms/Register";

  export default {
    layout: 'unauthorized',
    components: {
      RegisterForm
    }
  }
</script>
