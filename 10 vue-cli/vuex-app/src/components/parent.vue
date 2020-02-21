<template>
  <div>
    <span>我是父组件</span>
    <button @click="add">点击改变store</button>
    <hr>
    <span>过滤后的数据{{filter}}</span>
    <son :msg=msg></son>
  </div>
</template>

<script>
  import son from "./son"

  export default {
    name: "parent",
    components: {
      son
    },
    data:function () {
      return {
      }
    },
    computed:{
       msg:function () {
         return this.$store.state.name
       },
      filter:function () {
        return this.$store.getters.getNum;
      }
    },
    methods:{
      add(){
        // this.$store.commit("increase",1)
        this.$store.dispatch('increaseAction',1)
      }
    }
  }
</script>

<style scoped>

</style>
