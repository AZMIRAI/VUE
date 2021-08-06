import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import Signup from "@/components/Signup";
import Signin from '@/components/Signin';


Vue.use(VueRouter);

export default new VueRouter({
    mode : 'history',
    routes : [
        { path : '/', component: Home},
        { path : '/signup', component: Signup},
        { path : '/signin', component : Signin}
    ]
});
