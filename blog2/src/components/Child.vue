<template>
    <div class="box">
        <header><slot name="header"><h3>Defualt Header</h3></slot></header>
        <content><slot name="main"><h3>Deafault Main</h3></slot></content>
        <footer><slot name="footer"></slot></footer>
    </div>
    
</template>

<script>
    export default {
        name: "ChildComponent",
    }
</script>

<style>
.box {
    margin: 20px;
    padding: 20px;
    border: 1px solid #343441;
    width: 200px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
}
</style>