<template>
    <h1>This is the Child component</h1>
    <p>Hello I am {{ name }}</p>
    <p>I am {{ data.age }} years old</p>
    <p>My email is {{ email }}</p>
</template>

<script>
    export default {
        name: "ChildComponent",
        props: {
            name:String,
            email:String,
            data:Object,
        }
    }
</script>
