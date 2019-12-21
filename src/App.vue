<template>
    <div id="app">
        {{data}}
        <router-view></router-view>
    </div>
</template>
<script>
// import strage from "./storage";
export default {
    name: 'app',
    data() {
        return {
            data: {

            }
        }
    },
    mounted() {
        this.axios.get('/user/login').then(res => {
            this.data = res
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
