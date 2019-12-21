import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from './env'
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
});
// 设置请求接口
// axios.defaults.baseURL = '/api'
// axios.defaults.baseURL = env.baseURL
// 设置超时时间
axios.defaults.timeout = 8000;
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    let res = response.data
    if(res.status == 0) {
        return res.data;
    } else if(res.status == 10 ) {
        window.location.href = '/#/login'
    } else {
        alert(res.msg)
    }
});
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
