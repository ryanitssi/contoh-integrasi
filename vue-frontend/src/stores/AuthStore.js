import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const authStore = new Vuex.Store({
    state: {
        authenticated: false,
        token: '',
        username: 'unidentified',
        tokenValidity: ''
    },
    getters: {
        getUserAuth: state => {
          return {
            authenticated: state.authenticated,
            token: state.token,
            username: state.username,
            tokenValidity: state.tokenValidity
          }
        }
    },
    mutations: {
        setUserAuth (state, payload) {
            state.authenticated = payload.authenticated
            state.token = payload.token
            state.username = payload.username
            state.tokenValidity = payload.tokenValidity
        },
        updateToken (state, payload) {
            state.tokenValidity = payload.tokenValidity
            state.token = payload.token
        },
    }
})