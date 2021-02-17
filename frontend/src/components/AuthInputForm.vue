<template>
  <b-container fluid>
    <b-form-group
      v-if="inputMode === 'register'"
      id="first-name-label"
      label="First Name:"
      label-for="first-name-input"
    >
      <b-form-input
        id="first-name-input"
        v-model="firstName"
        placeholder="Enter your first name"
        required
        v-if="inputMode === 'register'"
      ></b-form-input>

      <span class="verror" v-if="!isFirstNameValid">{{ firstNameError }}</span>
    </b-form-group>

    <b-form-group
      v-if="inputMode === 'register'"
      id="last-name-label"
      label="Last Name:"
      label-for="last-name-input"
    >
      <b-form-input
        id="last-name-input"
        v-model="lastName"
        placeholder="Enter your last name"
        required
        v-if="inputMode === 'register'"
      ></b-form-input>

      <span class="verror" v-if="!isLastNameValid">{{ lastNameError }}</span>
    </b-form-group>

    <b-form-group
      id="email-label"
      label="Email address:"
      label-for="email-input"
    >
      <b-form-input
        id="email-input"
        v-model="email"
        type="email"
        placeholder="Enter your email"
        required
      ></b-form-input>

      <span class="verror" v-if="!isEmailValid">{{ emailError }}</span>
    </b-form-group>

    <b-form-group
      id="password-label"
      label="Password:"
      label-for="password-input"
    >
      <b-form-input
        id="password-input"
        v-model="password"
        type="password"
        placeholder="Enter your password"
        required
      ></b-form-input>

      <span class="verror" v-if="!isPasswordPresent">{{ passwordError }}</span>
    </b-form-group>

    <b-button @click="onSubmit" type="submit" variant="primary">{{
      inputMode === "register" ? "Register" : "Login"
    }}</b-button
    >&nbsp;
    <b-button @click="onReset" type="reset" variant="danger">Reset</b-button>
  </b-container>
</template>

<script>
import router from "vue-router";

export default {
  name: "AuthInputForm",

  props: ["input-mode"],

  data() {
    return {
      firstName: null,
      lastName: null,

      email: null,
      password: null,

      firstNameError: null,
      lastNameError: null,
      emailError: null,
      passwordError: null,
    };
  },

  computed: {
    isFirstNameValid() {
      return !(
        !this.firstName ||
        (this.firstName && this.firstName.trim().lenght === 0)
      );
    },

    isLastNameValid() {
      return !(
        !this.lastName ||
        (this.lastName && this.lastName.trim().lenght === 0)
      );
    },

    isEmailValid() {
      return !(
        !this.email ||
        (this.email && this.email.trim().lenght === 0) ||
        (this.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email))
      );
    },

    isPasswordPresent() {
      return this.password;
    },
  },

  methods: {
    async onSubmit() {
      if (this.inputMode === "register") {
        if (!this.isFirstNameValid) {
          this.firstNameError = "You must provide your first name!";
          return;
        } else this.firstNameError = null;

        if (!this.isLastNameValid) {
          this.lastNameError = "You must provide your last name!";
          return;
        } else this.lastNameError = null;
      }

      if (!this.isEmailValid) {
        this.emailError = "You must provide your email!";
        return;
      } else this.emailError = null;

      if (!this.isPasswordPresent) {
        this.passwordError = "You must provide your password!";
        return;
      } else this.passwordError = null;

      try {
        if (this.inputMode === "register") {
          await this.$store.dispatch("register", {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
          });
        } else {
          await this.$store.dispatch("login", {
            email: this.email,
            password: this.password,
          });
        }

        if (window.localStorage) {
          window.localStorage.setItem(
            "ticket-system-session",
            JSON.stringify(this.$store.state.session)
          );
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response);
          alert(error.response.data.error);
        } else if (error.request) {
          console.log(error.request);
          alert("Unable to connect to the server!");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      }
    },

    onReset() {
      this.firstName = this.lastName = this.email = this.password = "";
      this.firstNameError = this.lastNameError = this.emailError = this.passwordError = null;
    },
  },
};
</script>

<style scoped>
.verror {
  color: red;
}
</style>