<template>
  <div>

  </div>
</template>

<script>
    export default {
        name: "provide",
      inject:{
         name:{
           from:'sss',
         }
      },
      created() {
          console.log(this)
          console.log(this.name)
      }
    }
</script>

<style scoped>

</style>
