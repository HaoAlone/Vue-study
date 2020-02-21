<template>
  <ul>
    <li>
      <router-link
        :to="{name:'world',params:{name:'你好',msg:'我是msg'}}">
        Hello World
      </router-link >
    </li>
    <li>
      <router-link
        :to="{path:'earth',query:{msg:'我是msg',name:'我是name'}}">
        Hello Earth
      </router-link>
    </li>
    <li>
      <router-link to="axios">axios</router-link>
    </li>

  </ul>
</template>

<script>
  export default {
    name: "list"
  }
</script>

<style scoped>

</style>
