Vue.component('comments',{
    
    template:` <div>
    <input type="text" v-model="user">
    <input type="text" v-model="comment">
    <button @click="save">저장</button><br>
    <ul>
        <li v-for="msg in messages">
            <p>{{ msg.user}} : {{msg.comment}}</p>
        </li>
    </ul>
    </div>`, 
    data(){
        return { 
            user : null,
            comment : null, 
            messages:[],
        }
    },
    methods:{
            save(){
                const message= {
                    user:this.user,
                    comment:this.comment,
                };
                // 내림차순 unshift
                this.messages.unshift(message)
                this.user=null
                this.comment=null
            }
    }
});

let app = new Vue ({
    el: '#app',
});