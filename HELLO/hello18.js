let app = new Vue({
    el:'#app',
    data: {
        user_id:'user123',
        user_grade:'Silver',
        age:'20',
        },
    // 메서드

    computed:{
            user_info:function(){
                return this.user_id+'('+
                this.user_grade+')'
            },
            age_message(){
                let str='성인'
                if(this.age < 20 && this.age!= 0)str='성인이 아님'
                else if(this.age == 0)str='태어나지 않음'
                return str
              
            }
    }

});