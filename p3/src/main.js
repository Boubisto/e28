import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import router from '@/common/router.js'

import store from '@/common/store.js';

Vue.config.productionTip = false

Vue.use(VueRouter);


new Vue({
    router, // equivalent to router: router,
    store,
    render: h => h(App),
}).$mount('#app')