let app = new Vue({
    el:'#app',
    data:{
        counter:0
    }, 
    methods:{
        addCounter:function(){
            this.counter += 1
        }
    }

});