<template>
    <h1 ref="user">beforeUnmount and mounted</h1>
</template>
<script>

    export default {
        name: "UserComponent",
        beforeUnmount() {
            console.log(`beforeUnmount: ${this.$refs['user']}`)
            alert('beforeUnmount')
        },
        unmounted() {
            console.log(`Unmounted: ${this.$refs['user']}`)
            alert('Unmounted')
        }
    }
</script>