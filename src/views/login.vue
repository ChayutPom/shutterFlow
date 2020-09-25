<template>
  <v-app>

      <v-container fluid pa-0>
        <form @submit.prevent="onSignin">
          <v-layout row wrap>
            <v-layout column align-center justify-center pa-3 mt-5>
              <v-flex xs12 mb-3 mt-5>
                <div class="login-wrapper text-xs-center">
                  <div class="display-1 font-weight-black">LOGIN</div>
                </div>
              </v-flex>

              <v-flex xs12 class="form-wrapper">
                <v-text-field
                  name="email"
                  id="email"
                  v-model="email"
                  type="email"
                  required
                  full-width
                  single-line
                  label="Email"
                  background-color="#f4f8f7"
                  color="grey darken-2"
                  prepend-inner-icon="mdi-email-outline"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  required
                  full-width
                  single-line
                  background-color="#f4f8f7"
                  color="grey darken-2"
                  prepend-inner-icon="mdi-lock-outline"
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 mb-3>
                <v-btn fab small color="blue-grey lighten-4">
                  <v-icon color="grey darken-4">mdi-facebook</v-icon>
                </v-btn>
                <v-btn fab small color="blue-grey lighten-4">
                  <v-icon color="grey darken-4">mdi-google-plus</v-icon>
                </v-btn>
              </v-flex>
              <v-flex xs12 mb-2>
                <span class="grey--text text--lighten-1">or use your email for registration</span>
              </v-flex>
              <br />
              <v-row>
                <v-col>
                  <v-btn large dark ripple color="teal" type="submit">Sign in</v-btn>
                </v-col>
                <v-col>
                  <v-btn large dark ripple color="teal" id="sign-up" href="regis.vue">Sign up</v-btn>
                </v-col>
              </v-row>
            </v-layout>
          </v-layout>
        </form>
      </v-container>

  </v-app>
</template>


<script>

export default {
  data() {
    return {
      seen: true,
      email: "",
      password: "",

    };
  },
  computed: {
    user() {
      return this.$store.getters.user;

      
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    onSignin() {
      this.$store.dispatch("userSignIn", {
        email: this.email,
        password: this.password
      });              

    },
  },

};
</script>
