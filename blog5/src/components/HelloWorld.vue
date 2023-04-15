<template>
  <h2>beforeCreate and created {{ name }}</h2>
  <h2>beforemount and mounted {{ name }}</h2>  
  <h1 ref="count">{{ count }}</h1>
  <button @click="count++">Count</button>
  <User v-if="show"/>
  <button @click="show=!show">Hide</button>
</template>

<script>
import User from "./User.vue"

export default {
  name: 'HelloWorld',
  data() {
    return {
      name: 'Josue',
      count: 0,
      show: true,
    }
  },
  components: {
    User,
  },

  beforeCreate() {
    console.log(this.name)
    alert("beforeCreate")
  },

  created() {
    console.log(this.name)
    alert("Created")
  },

  beforeMount() {
    console.log(this.$el)
    alert("beforeMount")
  },

  mounted() {
    console.log(this.$el)
    alert("mounted")
  },

  beforeUpdate() {
    console.log("beforeUpdate", this.$refs['count'].textContent)
    alert("beforeUpdate")
  },
  updated() {
    console.log("Updated: ",this.$refs['count'].textContent)
    alert("Update")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
