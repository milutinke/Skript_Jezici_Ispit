export default {
    set_tickets(state, payload) {
        state.tickets = payload;
    },

    set_current_ticket(state, payload) {
        state.currentTicket = payload;
    },

    set_last_answer(state, payload) {
        state.lastAnswer = payload;
    }
}