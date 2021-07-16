Vue.component('add',{
    template:'<button @click="save">{{"저장"}}</button>',
    data(){
        return {count:0}
    },
    methods:{
        save(){
            this.count += ""
            this.$emit('event-add', 1);
        }
    },

});






let app = new Vue({

    el:'#app',
    data: {
        writter:'',
        contents:'',
        matomeru:[{name:'User'}, {name:'Admin'}],
    },
    methods:{
        updateTotal(count){
            this.totalCount += count
        }

    },
})