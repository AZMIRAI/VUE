<template>
  <div>
    <input type="text" name="email" placeholder="email" v-model="email"> <br>
    <input type="text" name="password" placeholder="password" v-model="password"> <br>
    <button @click="onSubmit(email,password)">로그인dddd</button>
    <br><br>
    <router-link :to="`/signup`">회원가입</router-link>
    <br><br>
    <v-alert
        type="warning"
        dismissible
        v-if="message"
    >{{message}}</v-alert>
<!--    <p><i>{{message}}</i></p>-->
  </div>
</template>

<script>
export default {
  name: "Signin",
  data () {
    return {
      email : '',
      password : '',
      message : ''
    }
  },
  methods: {
    onSubmit(email, password) {
      this.$store.dispatch('signin', {email, password})
        .then( () => {
          this.$router.push('/');
        }). catch( () => {
          console.log('err')
          this.message='Signin Failed';
      });
    }
  }
}
</script>

<style scoped>

</style>