<template>
  <div class="hello">
    <h1>Hello Earth</h1>
    <h2>{{$route.query}}</h2>

  </div>
</template>

<script>
export default {
  name: 'HelloEarth',
  data () {
    return {
    }
  },
  mounted() {
    console.log(this.$route.query)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
