import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import memo from './modules/memo';
Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        user,
        memo
    },
});