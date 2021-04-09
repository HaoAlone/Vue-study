<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
    return {
      'sss':{
        name:123,
        age:33
      }
    }
  },
  data(){
    return{
      name:'test'
    }
  },
  beforeCreate() {
    console.log(this.name)
    this.get()
  },
  methods:{
    get(){
      console.log(this.name)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
