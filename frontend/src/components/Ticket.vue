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

    <b-form-group
      v-if="ticketStatus != 0"
      id="body-label"
      label="Reply:"
      label-for="body-input"
    >
      <b-form-textarea
        v-if="ticketStatus != 0"
        id="body-input"
        v-model="replyBody"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
        maxlength="1024"
      ></b-form-textarea>

      <b-button
        v-if="ticketStatus != 0"
        @click="reply"
        type="submit"
        variant="primary"
        >Reply</b-button
      >
    </b-form-group>

    <span
      class="verror"
      v-if="ticketStatus != 0 && !(isReplyPresent || isReplyLengthNormal)"
      >{{ replyValidationError }}</span
    >

    <h5 v-if="ticketStatus === 0">
      This ticket is closed, you can not reply to it anymore!
    </h5>
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
      ticketStatus: null,

      replyBody: null,
      replyValidationError: null,
    };
  },

  computed: {
    isReplyPresent() {
      return this.replyBody;
    },

    isReplyLengthNormal() {
      return this.replyBody && this.replyBody.lenght < 1024;
    },
  },

  methods: {
    async reply() {
      if (!(this.isReplyPresent || this.isReplyLengthNormal)) {
        if (!this.isReplyPresent)
          this.replyValidationError = "The reply must not be empty!";
        else
          this.replyValidationError =
            "The reply can not be longer than 1024 characters!";
        return;
      } else this.replyValidationError = null;

      if (this.ticketStatus === 0) {
        alert("What are you trying to do?");
        return;
      }

      try {
        await this.$store.dispatch("postAnswer", {
          id: this.$route.params.id,
          body: this.replyBody,
        });
      } catch (error) {
        if (error.response) {
          console.log(error.response);
          alert(error.response.data.error);
          router.push({ name: "Home" });
        } else if (error.request) {
          console.log(error.request);
          alert("Unable to connect to the server!");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      }

      this.answers.push(this.$store.state.lastAnswer.answer);
    },
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
          this.$router.push("/");
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
    this.ticketStatus = this.$store.state.currentTicket.ticket.status;
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

.verror {
  color: red;
}
</style>