<template>
  <div class="home">
    <AuthInputForm input-mode="login" />
  </div>
</template>

<script>
import AuthInputForm from "@/components/AuthInputForm.vue";

export default {
  name: "Home",
  components: {
    AuthInputForm,
  },
};
</script>
