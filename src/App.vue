<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import strage from "./storage";
export default {
    name: 'app',
    data() {
        return {

        }
    },
    mounted() {
        // strage.setItem('aa',1423,'b')
        strage.clear('aa','b')
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
