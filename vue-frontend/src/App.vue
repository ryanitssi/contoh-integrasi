<template>
  <div class="app">
    <span v-if="userAuth.authenticated">
      <button @click="logout">logout</button>
      <nav>
        <RouterLink to="/">Home</RouterLink> | 
        <RouterLink to="/backend">Backend</RouterLink>
      </nav>
      <router-view></router-view>
    </span>
    <span v-else>
      <button @click="login">login</button>
    </span>
  </div>
</template>

<script>
import KeyCloakService from './security/KeycloakService';

export default {
  computed: {
    userAuth() {
      return this.$store.state.userAuth;
    }
  },
  methods: {
    login() {
      KeyCloakService.CallLogin();
    },
    logout() {
      KeyCloakService.CallLogout();
    }
  }
}
</script>

<style>
  .app {
    text-align: center;
  }

</style>