<template>
  <section class="login-form pb-5 pt-5">
    <v-container>
      <v-form @submit.prevent="register">
        <v-stepper v-model="e1" class="login-form__stepper transparent">
          <v-stepper-header class="login-form__stepper-header">
            <v-stepper-step
              :complete="e1 > 1"
              step="1">
            </v-stepper-step>

            <v-stepper-step
              :complete="e1 > 2"
              step="2"
            >
            </v-stepper-step>

            <v-stepper-step step="3">
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="login-form__stepper-card transparent mb-5">
                <h2 class="text-center mb-3">Enter your email:</h2>
                <v-text-field
                  class="mt-3"
                  v-model.trim="$v.email.$model"
                  color="white"
                  outlined
                  label="Enter Email"/>
                <span
                  class="red--text"
                  v-if="!$v.email.email && $v.email.$dirty">Entered email is invalid</span>
                <span
                  class="red--text"
                  v-else-if="!$v.email.required && $v.email.$dirty">To continue this field must be filled</span>
              </v-card>

              <div class="d-flex justify-center">
                <v-btn class="dark-teal-bg mr-5" @click="e1 = 1">Back</v-btn>
                <v-btn
                  class="dark-teal-bg"
                  :disabled="$v.email.$invalid"
                  @click="e1 = 2"
                >Next
                </v-btn>
              </div>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="login-form__stepper-card transparent mb-5">
                <h2 class="mb-3 text-center">Enter your login:</h2>
                <v-text-field
                  v-model.trim="$v.login.$model"
                  color="white"
                  outlined
                  label="Enter Login"/>
                <span
                  class="red--text"
                  v-if="!$v.login.minLength && $v.login.$dirty">Login must be at least 4 letters size</span>
                <span
                  class="red--text"
                  v-else-if="!$v.login.required && $v.login.$dirty">To continue this field must be filled</span>
              </v-card>
              <div class="d-flex justify-center">
                <v-btn class="dark-teal-bg mr-5" @click="e1 = 1">Back</v-btn>
                <v-btn
                  class="dark-teal-bg"
                  @click="e1 = 3"
                  :disabled="$v.login.$invalid"
                >Next</v-btn>
              </div>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="login-form__stepper-card transparent mb-5">
                <h2 class="mb-3 text-center">Enter your password:</h2>
                <v-text-field
                  type="password"
                  v-model.trim="$v.password.$model"
                  color="white"
                  outlined
                  label="Enter Password"/>
                <span
                  class="red--text"
                  v-if="!$v.password.minLength && $v.password.$dirty">Password must be at least 8 symbols size</span>
                <span
                  class="red--text"
                  v-else-if="!$v.password.required && $v.password.$dirty">To continue this field must be filled</span>
              </v-card>

              <div class="d-flex justify-center">
                <v-btn class="dark-teal-bg mr-5" @click="e1 = 2">Back</v-btn>
                <v-btn
                  class="align-self-center dark-teal-bg"
                  type="submit"
                  :disabled="$v.password.$invalid"
                >Sign up</v-btn>
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-form>
    </v-container>
  </section>
</template>

<script>


import {required, minLength, email} from "vuelidate/lib/validators";

export default {

  data() {
    return {
      email: '',
      login: '',
      password: '',
      e1: 1,
    }
  },

  validations: {
    email: {
      required,
      email,
      minLength: minLength(4)
    },
    login: {
      required,
      minLength: minLength(4)
    },
    password: {
      required,
      minLength: minLength(4),
    }

  },

  methods: {

    register() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log('invalid');
      }

      // await this.$axios.$post('/api/auth/register', this.registerFields);
    }
  }
}
</script>
