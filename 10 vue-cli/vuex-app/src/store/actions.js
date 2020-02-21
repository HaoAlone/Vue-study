export default {
  increaseAction:function (context,data) {
    console.log(context)
    console.log(data)
    setTimeout(function () {
      context.commit('increase',data)
    },2000)
  }
}
