import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const authStore = new Vuex.Store({
    state: {
        userAuth: {
            authenticated: false,
            token: '',
            username: 'unidentified'
        }
    }
})