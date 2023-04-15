<template>
    <button v-on:click="getStudName(name, age)">Get Student Data</button>
</template>

<script>
    export default {
        name: "StudentComponent",
        props: {
            getStudName: Function,
        },
        data() {
            return {
                name: "Peter",
                age: "20",
            }
        }
    }
</script>

<style>
</style>