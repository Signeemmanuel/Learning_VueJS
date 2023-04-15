<template>
    <h1>Home Component</h1>
    <h2>Personal Information</h2>
    <h3>Name: {{ getname() }}</h3>
    <h3>Email: {{ email }}</h3>
    <h3>Mobile: {{ mobile }}</h3>
    <h3>Your data: {{ getData() }}</h3>
    <h3>Get Random data: {{ getRandomData("Signe David", "signedavid@gmail.com", "+237 695820334") }}</h3>

    <!-- Click Event -->
    <h1>Click Events</h1>
    <div>
        <button v-on:click="add()">Add</button>
        <button v-on:click="sub()">Sub</button>
        <h3>{{ count }}</h3>
    </div>

    <h1>v-model</h1>
    <div>
        <input type="text" placeholder="Enter your name" v-model="yourName">
        <br>
        <input type="email" placeholder="Enter your email" v-model="yourEmail">
        <br>
        <button v-on:click="getYourData()">Get Data</button>
        
    </div>
    <div>
        <fieldset>
            <legend><p>Technologies</p></legend>
            
            <input type="checkbox" value="Python" id="python" v-model="technologies">
            <label for="python">Python</label>
            <input type="checkbox" value="JavaScript" id="javascript" v-model="technologies">
            <label for="javascript">JavaScript</label>
            <input type="checkbox" value="Java" id="java" v-model="technologies">
            <label for="java">Java</label>
        </fieldset>
        <fieldset>
            <legend>Profession</legend>
            <input type="radio" name="profesion" value="Student" id="student" v-model="profession" >
            <label for="student">Student</label>
            <input type="radio" name="profesion" value="Developper" id="developper" v-model="profession">
            <label for="developper">Developper</label>
        </fieldset>
        <h1>For loops</h1>
        <h4>Technologies:</h4>
        <ul>
            <li v-for="item in technologies" :key="item">{{ item }}</li>
        </ul>
        <h4>Profession: {{ profession }}</h4>
    </div>
    <div>
        <h1>if-else conditions</h1>
        <div id="box1" v-if="show"></div>
        <div id="box2" v-else></div>
        <button v-on:click="show = !show" >Click me</button>
    </div>
    <Child name="Emmanuel" :email="email" :data="user"/>    
</template>

<script>
    import Child from "./Child.vue"
    export default {
        name : 'Home-com',
        data : function() {
            return {
                getname() {
                    return this.name
                },
                name: "Signe Josue",
                email: 'signeemmanuel28@gmail.com',
                mobile: '+237 677876963',
                rName: "",
                rEmail: "",
                rMobile: "",
                count: 0,
                yourName: "",
                yourEmail: "",
                technologies: [],
                profession: null,
                show: true,
                user: {
                    age: 16,
                    password: "12345"
                }
            }
        },
        methods: {
            getData() {
                return {
                    name: this.name,
                    Email: this.email,
                    mobile: this.mobile,
                }
            },

            getRandomData(getName, getEmail, getMobile) {
                this.rName = getName
                this.rEmail =  getEmail
                this.rMobile = getMobile
                return {
                    name: this.rName,
                    Email: this.rEmail,
                    mobile: this.rMobile,
                }
            },

            add() {
                this.count += 1;
            },

            sub() {
                this.count -= 1;
            },

            getYourData() {
                console.warn(this.yourName, this.yourEmail)
            }

        },
        components: {
            Child,
        }
    }

</script>
<style scoped>
    * {
        text-align: left;
    }
    h1 {
        color: #ac3e50
    }
    #box1 {
        width: 100px;
        height: 100px;
        background-color: blue;
        margin-bottom: 10px;
    }
    #box2 {
        width: 50px;
        height: 50px;
        background-color: green;
        margin-bottom: 10px;
    }
</style>