<template>
    <h1>{{isAuth}}</h1>
    <button @click="login">LOGIN</button>
</template>

<script>
    import KeyCloakService from '../security/KeycloakService'

    export default {
        data() {
            return {
                isAuth: KeyCloakService.IsAuthenticated()
            }
        },
        methods: {
            login() {
                return KeyCloakService.CallLoginInit();
            }
        }
    }
</script>
