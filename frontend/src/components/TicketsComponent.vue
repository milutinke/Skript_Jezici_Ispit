<template>
  <div>
    <b-table
      v-if="tickets.length"
      hover
      :items="tickets"
      :fields="fields"
      sticky-header="800px"
      @row-clicked="openTicket"
    >
    </b-table>
    <h1 v-else>You have no tickets</h1>
  </div>
</template>

<script>
import router from "@/router";
import { mapState } from "vuex";

export default {
  name: "TicketsComponent",

  computed: {
    tickets() {
      let tickets = this.$store.state.tickets;

      tickets.forEach(
        (ticket) => (ticket.status = ticket.status === 0 ? "Closed" : "Open")
      );

      return tickets;
    },
  },

  data() {
    return {
      fields: [
        {
          key: "id",
        },
        {
          key: "title",
        },
        {
          key: "user",
        },
        {
          key: "createdAt",
        },
        {
          key: "status",
        },
      ],
    };
  },

  methods: {
    openTicket(item, index, event) {
      router.push({ path: "/ticket/" + item.id });
    },
  },

  async beforeCreate() {
    try {
      await this.$store.dispatch("getAllTickets");
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
};
</script>