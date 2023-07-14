<template>
  <nav class="w-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-4 text-white text-xl">
    <router-link class="mx-2" v-for="item in list " :key=item.title :to="item.to">{{ item.title }}</router-link>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      list: [
        { to: '/', title: 'Home' },
        { to: 'dc-heros', title: 'Dc Heros'},
        { to: 'calendar', title: 'Calendar' },
        { to: 'markdown', title: 'Markdown' },
        { to: 'slider', title: 'Slider Carousel' },
      ]
    }
  }
}
</script>

<style>

</style>