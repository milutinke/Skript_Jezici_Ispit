<template>
  <b-card no-body>
    <template #header>
      <h4 class="mb-0">Ticket #{{ ticketId }}</h4>
    </template>

    <b-card-body>
      <b-card-title>{{ ticketTitle }}</b-card-title>
      <b-card-sub-title class="mb-2">{{ ticketTime }}</b-card-sub-title>
      <b-card-text>
        {{ ticketBody }}
      </b-card-text>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item v-for="answer in answers" v-bind:key="answer.id">
        <h4>{{ answer.user }}</h4>
        <span class="time">{{ answer.createdAt }}</span>
        <p>{{ answer.body }}</p>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
import router from "vue-router";

export default {
  name: "Ticket",

  data() {
    return {
      answers: [],

      ticketTitle: null,
      ticketBody: null,
      ticketTime: null,
      ticketId: null,
    };
  },

  async beforeCreate() {
    try {
      await this.$store.dispatch("getSingleTicket", {
        id: this.$route.params.id,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        alert(error.response.data.error);

        if (error.response.toLowerCase().includes("invalid"))
          router.push({ name: "Home" });
      } else if (error.request) {
        console.log(error.request);
        alert("Unable to connect to the server!");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    }

    this.ticketTitle = this.$store.state.currentTicket.ticket.title;
    this.ticketBody = this.$store.state.currentTicket.ticket.body;
    this.ticketTime = this.$store.state.currentTicket.ticket.createdAt;
    this.ticketId = this.$store.state.currentTicket.ticket.id;
    this.answers = this.$store.state.currentTicket.answers;
  },
};
</script>

<style scoped>
.time {
  color: #6c757d;
  font-size: 15px;
  font-weight: bold;
}
</style>