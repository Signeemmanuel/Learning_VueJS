<template>
    <div class="user">
        <h2>Name: {{ data.name }}</h2>
        <h2>Email: {{ data.email }}</h2>
        <button v-on:click="getData(data.name)">Alert User</button>
    </div>
</template>

<script>
    export default {
        name: 'UserComponent',
        props: {
            data: Object,
            getData: Function,
        }
    }
</script>

<style>
    .user {
        background-color: skyblue;
        padding: 2px 0px 10px 10px;
        margin-bottom: 10px;
        width: 40vw,
    }
</style>