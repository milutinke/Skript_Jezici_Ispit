<template>
  <div id="app">
    <b-card title="Ticket System" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item
            v-if="!isLoggedIn"
            to="/"
            exact
            exact-active-class="active"
            >Login</b-nav-item
          >
          <b-nav-item
            v-if="!isLoggedIn"
            to="/register"
            exact
            exact-active-class="active"
            >Register</b-nav-item
          >
        </b-nav>
      </b-card-header>

      <b-card-body>
        <router-view></router-view>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "App",

  computed: {
    isLoggedIn() {
      return this.$store.state.session;
    },
  },

  beforeCreate() {
    if (window.localStorage) {
      let session_ = window.localStorage.getItem("ticket-system-session");
      if (session_) this.$store.dispatch("setSession", JSON.parse(session_));
    }
  },
};
</script>
