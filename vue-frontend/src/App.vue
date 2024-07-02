<template>
  <span v-if="isAuthenticated"><HomePageVue /></span>
  <span v-else><LoginPageVue /></span>
</template>

<script>
import KeyCloakService from './security/KeycloakService'
import HomePageVue from './views/HomePage.vue'
import LoginPageVue from './views/LoginPage.vue'

console.log("AUTH = " + KeyCloakService.IsAuthenticated())

export default {
  name: 'App',
  data() {
    return {
      isAuthenticated: KeyCloakService.IsAuthenticated()
    }
  },
  components: {
    HomePageVue, LoginPageVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
