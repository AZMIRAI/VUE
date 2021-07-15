Vue.component('hello',{
    props:['name'],
    template:'<p>{{message}}</p>',
    data: function(){
        return {message: 'hello!,' + this.name}
    }

})

let app = new Vue({

    el:'#app'

});