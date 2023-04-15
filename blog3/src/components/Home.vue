<template>
    <h1>Dynamic Components</h1>
    <button @click="tab='Java'">Java</button>
    <button @click="tab='Php'">Php</button>
    <button @click="tab='Python'">Python</button>
    <component :is="tab" />
</template>

<script>
    import Java from "./Java.vue"
    import Php from "./Php.vue"
    import Python from "./Python.vue"

    export default {
        name: "HomeComponent",
        components: {
            Java,
            Php,
            Python
        },
        data() {
           return{
                tab: "Java"
           } 
        },
    }
</script>

<style>
</style>