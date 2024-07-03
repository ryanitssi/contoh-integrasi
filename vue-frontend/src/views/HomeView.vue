<template>
    <div>
    <h1>HOME</h1>
    <h3>USER : {{ userAuth.username }}</h3>
    <h3>TOKEN : {{ userAuth.token }}</h3>
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
