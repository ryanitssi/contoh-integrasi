<template>
    <div>
        <h2>Profil Karyawan</h2>
        <h4>TLC : {{user.tlc}}</h4>
        <h4>Nama : {{user.name}}</h4>
        <h4>Email : {{user.email}}</h4>
        <h4>Agama : {{user.agama}}</h4>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            user: {
                tlc: '',
                name: '',
                email: '',
                agama: ''
            }
        }
    },
    mounted() {
        const tokenAuth = 'Bearer ' + this.$store.state.userAuth.token
        axios.get('http://localhost:3000/personel/info', {
            "headers": { "Authorization": tokenAuth }
        })
        .then(response => {
            if (response.status === 200)
                this.user = response.data
        })
        .catch(error => alert(error))
    }
}
</script>
