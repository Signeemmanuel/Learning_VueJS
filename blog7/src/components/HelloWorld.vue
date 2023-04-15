<template>
  <h1>APIs</h1>
  <h2>The GET method</h2>
  <ul v-for="item in list" :key="item.id">
    <li>{{ item.id }}</li>
    <li>{{ item.email }}</li>
    <li>{{ item.first_name }}</li>
    <li><img :src="item.avatar" alt="avatar"></li>
  </ul>

</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data() {
    return {
      list: [],
    }
  },

  async mounted() {
    const result = await axios.get("https://reqres.in/api/users?page=1")
    this.list = result.data.data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  li {
    display: inline-block;
    border: 1px solid #343445;
    padding: 10px;
    width: 200px;
  }

  img {
    width: 70px;
  }
  ul {
    display: flex;
  }
</style>
