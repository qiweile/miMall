<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            data: {

            }
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/public.scss";
// @import "./assets/scss/config.scss";
// @import "./assets/scss/button.scss";
</style>
