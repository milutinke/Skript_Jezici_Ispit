<template>
  <div class="home">
    <AuthInputForm v-if="!isLoggedIn" input-mode="login" />
    <div v-else>
      Logged in as: {{ this.$store.state.session.user.firstName }}
    </div>
  </div>
</template>

<script>
import AuthInputForm from "@/components/AuthInputForm.vue";

export default {
  name: "Home",

  computed: {
    isLoggedIn() {
      return this.$store.state.session != null;
    },
  },

  components: {
    AuthInputForm,
  },
};
</script>
