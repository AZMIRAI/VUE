<template>
    <div>
  <input type="text" v-model="user">
  <input type="text" v-model="comment">
  <button @click="save">저장</button><br>
  <ul>
      <li v-for="(msg,i) in messages" :key= "i">
          {{msg.user}} : {{msg.comment}}
      </li>
  </ul>


  </div>
</template>

<script>

export default{
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

}
</script>