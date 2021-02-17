<template>
  <b-container fluid>
    <b-form-group id="title-label" label="Title:" label-for="title-input">
      <b-form-input
        id="title-input"
        v-model="title"
        placeholder="Enter the title"
        required
      ></b-form-input>

      <span class="verror" v-if="!isTitleValid">{{ titleError }}</span>
    </b-form-group>

    <b-form-group id="body-label" label="Body:" label-for="body-input">
      <b-form-textarea
        id="body-input"
        v-model="body"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
        maxlength="1024"
        required
      ></b-form-textarea>

      <span class="verror" v-if="!isBodyValid || isBodyLengthInvalid">{{
        bodyError
      }}</span>
    </b-form-group>

    <b-button @click="onSubmit" type="submit" variant="primary">Create</b-button
    >&nbsp;
    <b-button @click="onReset" type="reset" variant="danger">Reset</b-button>
  </b-container>
</template>

<script>
import router from "vue-router";

export default {
  name: "TicketInputForm",

  data() {
    return {
      title: null,
      body: null,

      titleError: null,
      bodyError: null,
    };
  },

  computed: {
    isTitleValid() {
      return !(!this.title || (this.title && this.title.trim().lenght === 0));
    },

    isBodyValid() {
      return !(!this.body || (this.body && this.body.trim().lenght === 0));
    },

    isBodyLengthInvalid() {
      return this.body && this.body.lenght > 1024;
    },
  },

  methods: {
    async onSubmit() {
      if (!this.isTitleValid) {
        this.titleError = "You must provide a valid title!";
        return;
      } else this.titleError = null;

      if (!this.isBodyValid || this.isBodyLengthInvalid) {
        this.bodyError = !this.isBodyValid
          ? "You must provide a valid ticket content body!"
          : "Ticket body can not be longer than 1024 characters!";
        return;
      } else this.bodyError = null;

      console.log("awdwad");

      try {
        await this.$store.dispatch("createNewTicket", {
          title: this.title,
          body: this.body,
        });
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

      this.$router.push("/ticket/" + this.$store.state.currentTicket.ticket.id);
    },

    onReset() {
      this.title = this.body = "";
      this.titleError = this.bodyError = null;
    },
  },
};
</script>

<style scoped>
.verror {
  color: red;
}
</style>