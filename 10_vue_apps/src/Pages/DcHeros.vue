<template>
    <div class="m-auto mt-10">

        <h1 class="text-2xl text-center font-bold">Dc Heros {{ heroCount }}</h1>
        <ul class="mt-4">
            <li class="flex justify-between" v-for="(hero, index) in heros" :key="hero.name">
                <span>{{ hero.name }}</span>
                <button type="button" @click="removeItem(index)">x</button>

            </li>
        </ul>

        <form class="mt-10" @submit.prevent="addHero">
            <input class="border rounded p-1" type="text" v-model.lazy.trim="dcHero" placeholder="Enter hero name here">
            <button class="border rounded p-1 bg-gradient-to-r from-red-500 to-pink-500 text-white" type="submit">Add
                Hero</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "DcHeros",
    computed: {
        heroCount() {
            return this.heros.length
        }
    },

    methods: {
        addHero() {
            if (this.dcHero !== "") {
                this.heros.push({ name: this.dcHero })
                this.dcHero = ""
            }

        },

        removeItem(index) {
            this.heros = this.heros.filter((hero, i) => i !== index)
        }
    },

    data() {
        return {
            heros: [
                { name: "superman" },
                { name: "Wander Woman" },
                { name: "Spider man" },
            ],
            dcHero: "",
        }
    }
}
</script>

<style></style>