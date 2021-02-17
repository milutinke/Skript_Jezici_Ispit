import Vue from 'vue';
import store from '@/store';

function getJwt() {
    return store.state.session.token;
}

export default {
    async getAllTickets(state, payload) {
        try {
            const data = await Vue.axios.get(`http://localhost:80/api/ticket/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + getJwt()
                }
            });

            state.commit("set_tickets", data.data);
        } catch (error) {
            throw error;
        }
    },

    async getSingleTicket(state, payload) {
        try {
            const data = await Vue.axios.get(`http://localhost:80/api/ticket/` + payload.id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + getJwt()
                }
            });

            state.commit("set_current_ticket", data.data);
        } catch (error) {
            throw error;
        }
    },

    setCurrentTicket(state, payload) {
        state.commit("set_current_ticket", payload);
    }
}