<template>
  <main>
    <LoginForm/>
  </main>
</template>

<script>

  import LoginForm from "../components/forms/Login";

  export default {
    middleware: 'auth',
    auth: 'guest',
    components: {
      LoginForm
    }
  }
</script>
