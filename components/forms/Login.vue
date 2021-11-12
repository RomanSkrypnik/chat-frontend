<template>
  <section class="login-form pb-5 pt-5">
    <v-container>
      <v-row class="login-form__row flex-column align-center">
        <v-form class="login-form__form dark-bg d-flex flex-column mt-3">
          <legend class="text-h4 text-center mb-5">Login</legend>
          <v-text-field
            v-model="loginFields.email"
            label="email"
            color="white"
            outlined
            required
          />
          <v-text-field
            v-model="loginFields.password"
            label="password"
            color="white"
            required
            outlined
          />
          <v-btn
            class="align-self-center dark-teal-bg"
            @click="login">Sign in</v-btn>
          <nuxt-link
            class="mt-8 text-center subtitle-1"
            to="/register">You don't have an account? Click here to register!</nuxt-link>
        </v-form>
      </v-row>
    </v-container>
  </section>
</template>

<script>


  export default {

    data() {
      return {
        loginFields: {
          email: '',
          password: '',
        }
      }
    },

    methods: {

      async login() {
        try {

          await this.$auth.loginWith('local', {
            data: {
              email: this.loginFields.email,
              password: this.loginFields.password
            }
          });

        } catch (e) {
          console.log(e);
        }

      }
    }
  }
</script>
