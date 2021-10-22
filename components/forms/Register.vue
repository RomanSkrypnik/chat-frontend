<template>
  <section class="login-form pb-5 pt-5">
    <v-container>
      <v-row class="flex-column align-center">
        <v-form class="login-form__form blue darken-2 d-flex flex-column mt-3">
          <legend class="text-h4 text-center mb-5">Register</legend>
          <v-text-field
            v-model="registerFields.email"
            color="white"
            outlined
            label="email"/>
          <v-text-field
            v-model="registerFields.login"
            color="white"
            outlined
            label="login"/>
          <v-text-field
            v-model="registerFields.password"
            color="white"
            outlined
            label="password"/>
          <v-file-input
            v-model="registerFields.photo"
            color="white"
            name="image"
            label="image"
            type="file"/>
          <v-btn
            class="align-self-center light-blue darken-1"
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
        login: '',
        password: '',
        photo: null
      }
    }
  },

  methods: {

    async register() {

      const fd = new FormData();
      fd.append('email', this.registerFields.email);
      fd.append('login', this.registerFields.login);
      fd.append('password', this.registerFields.password);
      fd.append('photo', this.registerFields.photo);

      await this.$axios.$post('/api/auth/register', fd)
        .then(response => {
          // this.$router.push({path: '/login'});
        }).catch(e => console.log(e.message));

    }
  }
}
</script>
