<template>
    <h1>{{profile}}'s Profile</h1>
</template>
<script>
    import {useRoute} from 'vue-router'

    export default {
        name: "ProfileComponent",
        data() {
            return {
                profile: "",
            }
        },

        mounted() {
            let route = useRoute();
            
            this.profile = route.params.name
            console.log(this.profile)
        },
    }
</script>
<style>
</style>