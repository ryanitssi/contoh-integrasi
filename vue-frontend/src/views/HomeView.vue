<template>
    <div>
        <span v-if="userAuth.authenticated">
            <h2>Selamat datang {{ userAuth.username }}</h2>
            <h4>Keycloak Token : {{ userAuth.token }}</h4>
        </span>
        <span v-else>
            <h2>Selamat datang di Test Integrasi Keycloak</h2>
            <h2>Silahkan login terlebih dahulu</h2>
        </span>
    </div>
</template>

<script>
export default {
    computed: {
        userAuth() {
            return this.$store.state.userAuth;
        }
    }
}
</script>

<style>
</style>