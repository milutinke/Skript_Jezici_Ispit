<template>
  <div class="home">
    <AuthInputForm input-mode="register" />
  </div>
</template>

<script>
import AuthInputForm from "@/components/AuthInputForm.vue";

export default {
  name: "Register",
  components: {
    AuthInputForm,
  }
};
</script>
