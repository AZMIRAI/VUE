<template>
  <div>
    <input type="text" name="title" width="50%" placeholder="title" v-model="title" ><br>
    <input type="text" name="content" width="50%" placeholder="content" v-model="content"><br>
    <input type="file" name="file" @change="selectFile" ref="file"><br>
    <input type="submit" @click="updateMemo" name="save" value="save">
  </div>
</template>

<script>
import memoApi from "@/apis/memos";
export default {
  name: "UpdateMemo",
  data () {
    return {
      title : '',
      content : '',
      file : '',
    }
  },
  methods : {
    selectFile() {
      this.file=this.$refs.file.files[0];
    },
    updateMemo() {
      const data = new FormData();
      data.append('content', this.content);
      data.append('title', this.title);
      data.append('file', this.file);
      memoApi.updateMemo(this.$route.params.memoId, data)
        .then( () => {
          alert('수정되었습니다.');
          const url = '/memos/' + this.$route.params.memoId;
          this.$router.push(url);
        })
    }
  },
  mounted() {
    memoApi.getMemo(this.$route.params.memoId)
        .then(res => {
          const memo = res.data;
          console.log(memo);
          this.title = memo.title;
          this.content = memo.content;
          this.$refs.fileupload = memo.file;
        }).catch(() => {
    });
  }
}
</script>

<style scoped>
</style>