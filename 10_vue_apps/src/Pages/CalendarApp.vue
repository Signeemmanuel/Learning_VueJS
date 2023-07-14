<template>
  <div class="m-auto mt-10">
    <h1 class="my-2 text-center font-bold text-2xl">Vue Calendar</h1>
    <div class="flex justify-between font-bold text-xl">
      <p>{{ currentMonthName }}</p>
      <p>{{ currentYear }}</p>
    </div>
    <section class="flex my-2" >
      <p class="text-center" style="width: 14.2857%" v-for="day in days" :key="day">{{ day }}</p>
    </section>
    <section class="flex flex-wrap">
      <p class="text-center" style="width: 14.2857%" v-for="num in startDay()" :key="num"></p>
      <p class="text-center" style="width: 14.2857%" v-for="num in daysInMonth()" :key="num" :class="currentDateClass(num)">{{ Number(num) }}</p>
    </section>
    <section class="flex justify-between my-4">
      <button type="button" class="p-2 border rounded" @click="prev()">Prev</button>
      <button type="button" class="p-2 border rounded" @click="next()">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "CalendarApp",
  data() {
    return { 
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      currentMonthName: new Date().toLocaleString("default", {month: "long"}),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

    }
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay()
    },
    next() {
      this.currentMonth++;
      if(this.currentMonth >= 12){
        this.currentMonth = 0
        this.currentYear = this.currentYear + 1;
      }
      
      this.currentMonthName = new Date(this.currentYear, this.currentMonth).toLocaleString("Default", { month: 'long' })
    },
    prev() {
      this.currentMonth--;
      if(this.currentMonth < 0){
        this.currentMonth = 11
        this.currentYear = this.currentYear - 1;
      }
      this.currentMonthName = new Date(this.currentYear, this.currentMonth).toLocaleString("Default", { month: 'long' })
    },
    currentDateClass(num) {
      let fullDate = new Date(this.currentYear, this.currentMonth, num).toDateString()
      let currentDate = new Date().toDateString() 
      return fullDate === currentDate ? 'text-yellow-600' : '';

    },
  }

}
</script>

<style></style>