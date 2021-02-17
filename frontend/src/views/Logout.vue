<template>
  <div class="home">
    <b-button variant="danger" @click="logout">Log out</b-button>
  </div>
</template>

<script>
export default {
  name: "Logout",
  methods: {
    logout() {
      if (confirm("Do you really want to logout?")) {
        window.localStorage.removeItem("ticket-system-session");
        this.$store.dispatch("setSession", null);
        this.$router.push("/");
      }
    },
  },
};
</script>
