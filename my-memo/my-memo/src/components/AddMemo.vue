<template>
  <div>
    <input type="text" name="title" width="50%" placeholder="title" v-model="title"><br>
    <input type="text" name="content" width="50%" placeholder="content" v-model="content"><br>
    <input type="file" name="file" @change="selectFile" ref="file"><br>
    <input type="submit" @click="addMemo" name="send" value="send">
  </div>
</template>

<script>
import memoApi from '../apis/memos';

export default {
  name: "AddMemo",
  data() {
    return {
      title : '',
      content : '',
      file : ''
    }
  },
  methods: {
    selectFile() {
      this.file=this.$refs.file.files[0];
    },
    addMemo() {
      const data = new FormData();
      data.append('title', this.title);
      data.append('content', this.content);
      data.append('file',this.file);

      memoApi.addMemo(data)
        .then(response => {
          console.log(response.status);
          this.$router.push('/');
        }).catch(error => {
          console.log(error);
          this.$router.push('/');
      })
    }
  }
}
</script>

<style scoped>

</style>