// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import VueResource from 'vue-resource'
//引入css重置文件,基本的样式文件
require('./assets/css/reset.css');
Vue.use(VueResource);
Vue.http.options.emulateJSON = true; // = headers: {'Content-Type': 'application/x-www-form-urlencoded'}
Vue.http.options.emulateHTTP = true;

// HTTP相关
Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
window.Vue = Vue

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
