<template>
  <div>
    <!-- <p v-if="requiresAuth">
      <router-link :to="{path:'/signin'}">Signin</router-link>
    </p> -->
  </div>
</template>

<script>
  import memoApi from '../apis/memos'

  export default {
    name: 'Home',
    data(){
      return {
        memos:[],
      }
    },
    mounted(){
      memoApi.getMemos()
      .then(res=>{
        this.memos = res.data
      })
      .catch(()=>{
      })
    }

    // data(){
    //   return {
    //     requiresAuth:false
    //   }
    // },
    // beforeRouteEnter(to,from,next){
    //   next(vm=>{
    //     vm.requiresAuth=true
    //   })
    // },
    // beforRouteLeave(to,from,next){
    //   this.requiresAuth=false
    //   next()
    // }
  }
</script>
