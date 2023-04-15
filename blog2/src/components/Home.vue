<template>
    <h1>Home</h1>
    <ul>
        <li v-for="item in users" :key="item.name">
            <User :data="item" :getData="getData" />
        </li>
    </ul>
    <hr>
    <h1>Html Binding</h1>
    <div v-html="tag1 + tag2"></div>
    <hr>
    <h1>CSS class binding</h1>
    <h2 :class="applyStyle">Hello Guys</h2>
    <button v-on:click="colorfull = !colorfull">Apply Style</button>
    <hr>
    <h1>Passing data from child to parent</h1>
    <h2>Student Name: {{ studName }}</h2>
    <h2>Student Age: {{ studAge }}</h2>
    <Student :getStudName="getStudName"/>

    <hr>
    <h1>Simple Form</h1>
    <ul>
        <li v-for="item in errorMessage" :key="item">
        invalid {{ item }}</li>
    </ul>
    <form>
        <label for="user-name">User Name: </label>
        <input type="text" id="user-name" class="input-group1" name="user-name" v-model="loginUser.username">
        <label for="password">Password: </label>
        <input type="password" id="password" class="input-group1" name="password" v-model="loginUser.password">
        <label for="country">Country: </label>
        <select name="country" id="country" class="input-group2" v-model="loginUser.country">
            <option value="Cameroon">Cameroon</option>
            <option value="USA">USA</option>
            <option value="China">China</option>
        </select>
        <H3>Gender</H3>
        <label for="male">Male: </label>
        <input type="radio" id="male" class="input-group3" value="male" name="gender" v-model="loginUser.gender">
        <label for="female">Female: </label>
        <input type="radio" id="female" class="input-group3" value="female" name="gender" v-model="loginUser.gender">
        <h3>Technology</h3>
        <label for="javascript">JavaScript: </label>
        <input type="checkbox" id="javascript" value="JavaScript" name="technology" v-model="loginUser.technology">
        <br>
        <label for="java">Java: </label>
        <input type="checkbox" id="java" value="Java" name="technology" v-model="loginUser.technology">
        <br>
        <label for="python">Python: </label>
        <input type="checkbox" id="python" value="python" name="technology" v-model="loginUser.technology">
        <br>
        <button type="button" v-on:click="login()">Login</button>
    </form>
    <hr>
    <h1>Watchers</h1>
    <h2>{{ count }}</h2>
    <button v-on:click="count++">Add</button>
    <button v-on:click="count--">sub</button>
    <hr>
    <h1>Slots</h1>
    <Child>
        <template v-slot:header >
            <h3>Peter</h3>
        </template>
        <template v-slot:main>
            <h3>15</h3>
        </template>
        <template v-slot:footer>
            <button>Buy now</button>
        </template>
    </Child>
    <Child>
        <template v-slot:header >
            <h3>John</h3>
        </template>
        <template v-slot:main>
            
        </template>
        <template v-slot:footer>
            <button>Buy now</button>
        </template>
    </Child>
    <Child>
        <template v-slot:header >
         
        </template>
        <template v-slot:main>
            <h3>18</h3>
        </template>
        <template v-slot:footer>
            <button>Buy now</button>
        </template>
    </Child>
</template>

<script>
import User from "./User.vue"
import Student from "./Student.vue"
import Child from "./Child.vue"

export default {

    name: 'HomeComponent',
    components: {
        User,
        Student,
        Child,
    },
    methods: {
        getData(name) {
            alert(name)
        },
        getStudName(name, age) {
            this.studName = name
            this.studAge = age
        },
        login() {
            this.errorMessage = []
            for(const item in this.loginUser) {
                if(this.loginUser[item] === "" || this.loginUser[item].length === 0) {
                    this.errorMessage.push(item)
                }
            }
            if(this.errorMessage.length === 0) {
                alert("Login successful")
            }
            
        }
    },
    data() {
        return {
            users: [{ name: "Josue", email: "josue@gmail.com" },
            { name: "David", email: "david@gmail.com" },
            { name: "Emmanuel", email: "emmanuel@gmail.com" }],
            tag1: "<h2>Hi Guys</h2>",
            tag2: "<h2>I am so happy</h2>",
            colorfull: false,
            studName: "",
            studAge: "",
            loginUser: {
                username:"",
                password:"",
                country: "",
                gender: "",
                technology: [],
            },
            errorMessage: [],
            count: 0,
        }
    },

    computed: {
        applyStyle() {
            return {
                green: this.colorfull,
                other: this.colorfull,
            }
        }
    },

    watch: {
        count(val, prev) {
            if (val > 10 && val > prev) {
                this.count = 10
                alert("Stop Counting Up")
            }
            if (val < 0 && val < prev) {
                this.count = 0
                alert("Stop Counting Down")
            }
        }
    },
}
</script>

<style>
* {
    text-align: left;
    /* margin: 0; */
}

body {
    padding: 10px;
}
hr{
    margin: 20px 0px;
}
h1 {
    color: rgb(0, 225, 255)
}
li {
    list-style: none;
}

.green {
    background-color: green;
    color: #fff;
    width: 300px;
    padding: 5px 5px 5px 15px;
}

.other {
    font-size: 1.5rem;
    font-style: oblique;
}
form {
    margin: 30px;
    padding: 30px;
    border: 1px solid #3434c5;
    border-radius: 10px;
    max-width: 500px;
}

.input-group1 {
    display: block;
    width: 100%;
    margin: 10px 0;
    height: 1.5rem;
}

.input-group2 {
    width: 50%;
    height: 1.8rem;
    margin-top: 10px;
}

.input-group3 {
    margin-right:  50px;
}

form h3 {
    margin-bottom: 0.5rem;
}

form button {
    margin-top: 20px;
    width: 100px;
    font-size: 1.1rem;
    text-align: center;
    right: 10px;
}
</style>