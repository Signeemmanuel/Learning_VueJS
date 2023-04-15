<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Routing</h1>
  <router-link to="/">Home</router-link>
  <br>
  <router-link to='/login'>Login</router-link>
  <br>
  <router-link to='/profile/john'>John's Profile</router-link>
  <br>
  <router-link to='/profile/josue'>Josue's profile</router-link>
  <br>
  <router-link to='/profile/mary'>Maries's profile</router-link>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

</style>
