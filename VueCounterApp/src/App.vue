<script setup>
import { ref } from 'vue'

let count = ref(0)

const CountAdd = () => {
  count.value++
}

const CountSubtract = () => {
  count.value--
}
</script>

<template>
  <main class="w-screen h-screen flex flex-col items-center justify-center bg-orange-50">
    <h4 class="text-4xl">The current Count is...</h4>
    <h1 class="text-8xl font-bold my-4">{{ count }}</h1>
    <div>
      <button class="border px-20 py-2 mx-2 rounded-full bg-orange-500 text-2xl font-bold" @click="CountSubtract">-</button>
      <button class="border px-20 py-2 rounded-full bg-orange-500 text-2xl font-bold" @click="CountAdd">+</button>
    </div>
  </main>
</template>

<style scoped>

</style>
