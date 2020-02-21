<template>
  <div class="hello">
    <h1>Hello axios</h1>
    <button @click="getData">点击发送get请求</button>
    <ul>
      <li v-for="item in items">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'axios',
    data() {
      return {
        items: []
      }
    },
    methods: {
      getData: function () {
        // post 方法 如果后台需要formdata数据类型，使用qs库

        this.$axios.get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: 1,
            tab: 'good',
            limit: 15
          }
        })
          .then(res => {
            console.log(res)
            this.items = res.data.data;
          })
          .catch(error => {
            console.log(error)
          })
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
