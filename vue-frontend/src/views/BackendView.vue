<template>
    <div>
        <h1>CALL DATA FROM BACKEND</h1>
        <h4>PERSONEL DATA</h4>
        <h3>{{user}}</h3>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {
    setup() {
        let user = ref({})

        //mounted
        onMounted(() => {

           //panggil function "getDataPosts" 
           getDataUser()

        })

        function getDataUser() {
            const tokenAuth = 'Bearer ' + this.$store.state.userAuth.token
            axios.get('http://localhost:3000/personel/info', {
                "headers": { "Authorization": tokenAuth }
            })
            .then(response => {
                user = response
            }).catch(error => {
                console.log(error)
            })
        }

        //return
        return {
            user,
            getDataUser,
        }

    }
}
</script>
