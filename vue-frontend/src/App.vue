<template>
  <div class="app">
    <nav class="navbar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/backend" v-if="userAuth.authenticated">Backend</RouterLink>
      <button @click="logout" v-if="userAuth.authenticated">Logout</button>
    </nav>
    <router-view></router-view>
    <div class="login" v-if="!userAuth.authenticated"><button @click="login">Login</button></div>
  </div>
</template>

<script>
import KeyCloakService from './security/KeycloakService';

export default {
  computed: {
    userAuth() {
      return this.$store.getters.getUserAuth;
    }
  },
  methods: {
    login() {
      KeyCloakService.CallLogin();
    },
    logout() {
      if (this.$router.currentRoute.path !== '/')
          this.$router.push('/')
      KeyCloakService.CallLogout();
    }
  }
}
</script>

<style>
  .navbar {
    background-color: #333;
    overflow: hidden;
  }

  .navbar a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    font-size: 18px;
    float: left;
    text-decoration: none;
  }

  .navbar button {
    color: white;
    background-color: #333;
    text-align: center;
    float: right;
    font-size: 18px;
    padding: 14px 16px;
    border: none;
  }

  .navbar a:hover:not(.active) {
    background-color: black;
  }

  .navbar button:hover:not(.active) {
    background-color: black;
  }

  .login {
    text-align: center;
  }

  .login button {
    color: white;
    background-color: #333;
    text-align: center;
    font-size: 18px;
    padding: 14px 16px;
    border: none;
  }
</style>