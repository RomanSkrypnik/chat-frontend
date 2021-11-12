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
    layout: 'unauthorized',
    components: {
      LoginForm
    }
  }
</script>
