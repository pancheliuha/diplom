
import Vue from 'vue';
import routes from './router';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import store from './store';
import {sync} from 'vuex-router-sync'

let router = new VueRouter({
    routes: routes,
    mode: 'history',
    scrollBehavior: function (to, from, savedPosition) {
        return savedPosition || {x: 0, y: 0}
    }
});


Vue.use(VueAxios, axios);
Vue.use(VueRouter);

sync(store, router);

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.middleware)) {

        to.matched.some(record =>{
            if(record.meta.middleware !== undefined){
                record.meta.middleware.forEach(function (item, index) {
                    middleware[item].handle(to, from, next);
                })
            }
        });

    }else{
        next();
    }

    if(to.meta.title !== undefined){
        document.title = to.meta.title;
    }

});


const app = new Vue({
    el: '#app',
    store: store,
    router: router,
    render: h => h(App)
});