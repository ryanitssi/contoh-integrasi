<template>
    <div>
    <h1>ABOUT</h1>
    <input v-model="userAuth.username" />
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

