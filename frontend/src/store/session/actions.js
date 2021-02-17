import Vue from 'vue';

export default {
    async login(state, payload) {
        try {
            const data = await Vue.axios.post(`http://localhost:80/api/auth/login`, {
                email: payload.email,
                password: payload.password
            });

            state.commit("set_session_mutation", data.data);
        } catch (error) {
            throw error;
        }
    },

    async register(state, payload) {
        try {
            const data = await Vue.axios.post(`http://localhost:80/api/auth/register`, {
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                password: payload.password
            });

            state.commit("set_session_mutation", data.data);
        } catch (error) {
            throw error;
        }
    },

    setSession(state, payload) {
        state.commit("set_session_mutation", payload);
    }
}