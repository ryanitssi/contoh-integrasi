import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import { authStore } from './stores/AuthStore'
import KeyCloakService from './security/KeycloakService'

Vue.use(VueRouter)
Vue.config.productionTip = false

const renderApp = (userAuth) => {
  new Vue({
    router,
    store: authStore,
    render: h => h(App)
  }).$mount('#app')
  authStore.state.userAuth = userAuth
}

KeyCloakService.CallInit(renderApp)