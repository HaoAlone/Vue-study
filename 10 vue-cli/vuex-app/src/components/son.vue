<template>
  <div>
    <span>我是子组件；{{msg}}</span>
  </div>
</template>

<script>
  export default {
    name: "son",
    props: {
      "msg":{
        type:Number,
        default:'default'
      }
    }
  }
</script>

<style scoped>

</style>
