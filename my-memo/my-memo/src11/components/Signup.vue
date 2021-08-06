<template>
<div>
  <p>회원가입</p>
  <input type="text" name="email" placeholder="email" v-model="r_email"> <br>
  <input type="text" name="name" placeholder="name" v-model="r_name"> <br>
  <input type="password" name="password" placeholder="password" v-model="r_pwd"> <br>
  <button @click="registerButton">회원가입</button>
  <br><br>
  <p><i>{{message}}</i></p>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Signup",
  data () {
    return {
      r_email : '',
      r_name : '',
      r_pwd : '',
      message : '',
    }
  },
  methods: {
    registerButton() {
      // const data = new FormData();
      // data.append('userid',this.r_email);
      // data.append('name',this.r_name);
      // data.append('password',this.r_pwd);
      const data = {
        'userid' : this.r_email,
        'name' : this.r_name,
        'password' : this.r_pwd
      };
      // this.$store.dispatch('register',data)
      //   .then( () => {
      //     this.$router.push('/');
      //   }).catch( (err) => {
      //     console.log(err);
      // });
      axios.post('/api/users', data)
          .then(response => {
            console.log(response.status);
            alert('register successful');
            this.$router.push('/');
          })
          .catch(error => {
            console.log(error);
            console.log('register failed');
            this.message='register failed';
          });
    }
  }
}