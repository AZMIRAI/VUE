<template>
  <div>
    <v-btn class="ml-10 mt-2" color="primary" dark :to="`/Add`">메모 만들기
      <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
    </v-btn>
    <v-btn class="ml-10 mt-2" color="orange darken-2" dark @click="logout">
      <v-icon dark left>mdi-arrow-left</v-icon>로그아웃
    </v-btn>
    <v-btn class="ml-10 mt-2" color="red" dark @click="leave">탈퇴
      <v-icon dark right>mdi-cancel</v-icon>
    </v-btn>

    <h1 v-if="!memos">메모가 없어용</h1>
    <ul >
      <li v-for="(memo,index) in memos" :key="index">


        <v-card
            class="mx-auto"
            max-width="344"
            outlined
            to="`/memos/${memo.memoid}`"
            width = 280px
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{memo.memoid}}</div>
              <v-list-item-title class="headline mb-1">{{memo.title}}</v-list-item-title>
              <v-list-item-subtitle>{{memo.content}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
                tile
                size="80"
                color="grey"
            >
              <img :src="`http://localhost:3000/${memo.fileUrl}`" v-if="memo.fileUrl"/>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </li>
    </ul>

  </div>
</template>

<script>
import memoApi from '../apis/memos'

export default {
  name: "Home",
  data () {
    return {
      memos : [],
    }
  },
  mounted () {
    memoApi.getMemos()
      .then(res => {
        this.memos = res.data
      }).catch( () => {
    });
    console.log(this.$store.getters.getUserid);
  },
  methods: {
    logout() {
      this.$store.commit('signout');
    },
    leave() {
      memoApi.leaveAuth(this.$store.getters.getUserid)
        .then( () => {
          alert('탈퇴하셨습니다.');
          this.$router.push('/signin');
        }).catch( () => {

      });
    }
  }

}
</script>

<style scoped>
  ul {
    list-style: none;
  }

  li {
    margin: 15px;
    float : left;
  }
</style>