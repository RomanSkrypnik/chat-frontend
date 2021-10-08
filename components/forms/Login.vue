<template>
  <section class="login-form pb-5 pt-5">
    <v-container>
      <v-row class="flex-column align-center">
        <h2>Login</h2>
        <v-form class="login-form__form d-flex flex-column">
          <v-text-field
            v-model="loginFields.email"
            label="email"
            required
          ></v-text-field>
          <v-text-field
            v-model="loginFields.password"
            label="password"
            required
          ></v-text-field>
          <v-btn
            class="align-self-center"
            @click="login"
          >Sign in
          </v-btn>
        </v-form>
        <nuxt-link
          class="mt-3"
          to="/register"
        >You don't have an account? Click here to register!
        </nuxt-link>
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
