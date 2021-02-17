<template>
  <div class="home">
    <TicketInputForm />
  </div>
</template>

<script>
import TicketInputForm from "@/components/TicketInputForm.vue";

export default {
  name: "NewTicket",
  components: {
    TicketInputForm,
  },
};
</script>
