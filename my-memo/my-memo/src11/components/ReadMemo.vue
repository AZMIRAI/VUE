<template>
  <div>
    <h1>제목 : {{memo.title}}</h1><br>
    <p>내용 : {{memo.content}}</p>
    <img :src="`http://localhost:3000/${memo.fileUrl}`" width="200px" v-if="memo.fileUrl">
    <p>저장 시간 : {{memo.savedTime}}</p>

    <br><br>
    <button @click="updateMemo">수정</button><br>
    <button @click="deleteMemo">삭제</button>
  </div>
</template>

<script>
import memoApi from '../apis/memos';
// import axios from 'axios';
export default {
  name: "ReadMemo",
  data() {
    return {
      memo : {}
    }
  },
  mounted() {
    memoApi.getMemo(this.$route.params.memoId)
      .then(res => {
        this.memo = res.data;
        console.log(this.memo);
      }).catch(() => {
    });
  },
  methods: {
    deleteMemo() {
      memoApi.deleteMemo(this.memo.memoid)
        .then( () => {
          alert('삭제되었습니다.');
          this.$router.push('/');
        }).catch(err => {
          console.log(err);
      })
    },
    updateMemo() {
      const url = '/memos/update/' + this.memo.memoid;
      this.$router.push(url);
    }
  }
}
</script>