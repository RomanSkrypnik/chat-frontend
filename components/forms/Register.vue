<template>
  <section class="login-form pb-5 pt-5">
    <v-container>
      <v-row class="flex-column align-center">
        <h2>Register</h2>
        <v-form class="login-form__form d-flex flex-column">
          <v-text-field
            v-model="registerFields.email"
            label="email"
            required
          ></v-text-field>
          <v-text-field
            v-model="registerFields.password"
            label="password"
            required
          ></v-text-field>
          <v-btn
            class="align-self-center"
            @click="register"
          >Sign up
          </v-btn>
        </v-form>
      </v-row>
    </v-container>
  </section>
</template>

<script>


  export default {

    data() {
      return {
        registerFields: {
          email: '',
          password: '',
        }
      }
    },

    methods: {

      async register() {

        await this.$axios.$post('/api/auth/register', {
          'email': this.registerFields.email,
          'password': this.registerFields.password,
        }).then(response => {
          this.$router.push({path: '/login'});
        }).catch(e => console.log(e.message));

      }
    }
  }
</script>
