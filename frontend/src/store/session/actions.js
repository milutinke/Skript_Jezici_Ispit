import Vue from 'vue';

export default {
    async login(state, payload) {
        try {
            const data = await Vue.axios.post({
                url: `${Vue.BASE_API_URL}/auth/login`,
                data: {
                    email: payload.email,
                    password: payload.password
                }
            });

            state.commit("set_session_mutation", data);
        } catch (error) {
            console.log(error);
        }
    },

    async register(state, payload) {
        try {
            const data = await Vue.axios.post({
                url: `${Vue.BASE_API_URL}/auth/register`,
                data: {
                    firstName: payload.firstName,
                    lastName: payload.lastName,
                    email: payload.email,
                    password: payload.password
                }
            });

            state.commit("set_session_mutation", data);
        } catch (error) {
            console.log(error);
        }
    },

    setSession(state, payload) {
        state.commit("set_session_mutation", payload);
    }
}