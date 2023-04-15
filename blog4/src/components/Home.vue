<template class>
    <h1>Teleport Components</h1>
    <teleport to="#footer">
        <Footer />
    </teleport>
    
</template>

<script>
    import Footer from "./Footer.vue"

    export default {
        name:"HomeComponent",
        components: {
            Footer,
        }

    }
</script>

<style></style>