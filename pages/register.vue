<template>
  <main>
    <RegisterForm/>
  </main>
</template>

<script>
  import RegisterForm from "../components/forms/Register";

  export default {
    layout: 'Unauthorized',
    components: {
      RegisterForm
    }
  }
</script>
