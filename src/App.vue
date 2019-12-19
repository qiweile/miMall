<template>
    <div id="app">
        {{datalist}}
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import jsonp from 'jsonp'
export default {
    name: 'app',
    data() {
        return {
            datalist: {}
        }
    },
    components: {
        HelloWorld
    },
    mounted() {
        let url = '/api/static-files/40z3oz40z4lz17z4bz3mz48z4az42z3mz40z51z4l.js?v=1&ent_id=7772&jsonp_cb=blacklistJsonp';
        jsonp(url, (err,src) => {
            this.datalist = src
        })
    }
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
