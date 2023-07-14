<template>
  <div class="flex flex-wrap w-full relative">
    <div v-for="(slider, index) in sliders" :key="slider" class="w-full absolute">
      <Transition name="fade">
        <div v-if="currentSlide == index" class="w-full" :class="slider" style="height: 350px"></div>
      </Transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="absolute bottom-0 w-full flex gap-2 justify-center">
        <div v-for="(slider, index) in sliders" :key="slider" :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'" class="w-4 h-4 rounded-full cursor-pointer shadow-md" 
        @click="makeActive(index)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderApp",
  data() {
    return {
      sliders: ['bg-blue-500', 'bg-yellow-600', 'bg-green-500'],
      currentSlide: 0,
      interval: '',
      isTitleShowing: true,
    }
  },

  methods: {
    makeActive(index) {
      this.currentSlide = index;
    }
  },

  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide == 2 ? 0 : this.currentSlide + 1;
    }, 2000)
  },

  beforeUnmount() {
    clearInterval(this.interval)
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}</style>