import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


const index = resolve => {
    require.ensure(['../vue/index.vue'], () => {
        resolve(require('../vue/index.vue'));
    });
}

const car = resolve => {
    require.ensure(['../vue/car.vue'], () => {
        resolve(require('../vue/car.vue'));
    });
}
const sort = resolve => {
    require.ensure(['../vue/sort.vue'], () => {
        resolve(require('../vue/sort.vue'));
    });
}
const user = resolve => {
    require.ensure(['../vue/user.vue'], () => {
        resolve(require('../vue/user.vue'));
    });
}
const list = resolve => {
    require.ensure(['../vue/list.vue'], () => {
        resolve(require('../vue/list.vue'));
    });
}
const detail = resolve => {
    require.ensure(['../vue/detail.vue'], () => {
        resolve(require('../vue/detail.vue'));
    });
}
const order = resolve => {
    require.ensure(['../vue/order.vue'], () => {
        resolve(require('../vue/order.vue'));
    });
}
const order_list = resolve => {
    require.ensure(['../vue/order_list.vue'], () => {
        resolve(require('../vue/order_list.vue'));
    });
}
const login = resolve => {
    require.ensure(['../vue/login.vue'], () => {
        resolve(require('../vue/login.vue'));
    });
}
const regist = resolve => {
    require.ensure(['../vue/regist.vue'], () => {
        resolve(require('../vue/regist.vue'));
    });
}
const adress = resolve => {
    require.ensure(['../vue/adress.vue'], () => {
        resolve(require('../vue/adress.vue'));
    });
}
const new_adress = resolve => {
    require.ensure(['../vue/new_adress.vue'], () => {
        resolve(require('../vue/new_adress.vue'));
    });
}
const weixin = resolve => {
    require.ensure(['../vue/weixin.vue'], () => {
        resolve(require('../vue/weixin.vue'));
    });
}
const care = resolve => {
    require.ensure(['../vue/care.vue'], () => {
        resolve(require('../vue/care.vue'));
    });
}
const routes = [{
        path: '/index',
        name: 'index',
        component: index
    },{
        path: '/',
        name: 'index',
        component: index
    },{
        path: '/car',
        name: 'car',
        component: car
    },{
        path: '/sort',
        name: 'sort',
        component: sort
    },{
        path: '/user',
        name: 'user',
        component: user
    },{
        path: '/list',
        name: 'list',
        component: list
    },{
        path: '/index/goods',
        name: 'detail',
        component: detail
    },{
        path: '/order',
        name: 'order',
        component: order
    },{
        path: '/order_list',
        name: 'order_list',
        component: order_list
    },{
        path: '/login',
        name: 'login',
        component: login
    },{
        path: '/regist',
        name: 'regist',
        component: regist
    },{
        path: '/adress',
        name: 'adress',
        component: adress
    },{
        path: '/new_adress',
        name: 'new_adress',
        component: new_adress
    },{
        path: '/pay/weixin',
        name: 'weixin',
        component: weixin
    },{
        path: '/care',
        name: 'care',
        component: care
    }];

export default new Router({
    mode: 'history',
    routes
}); 