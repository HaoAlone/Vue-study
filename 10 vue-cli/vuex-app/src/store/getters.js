export default {
  getNum(state){
    console.log(state.name)
    return state.name<20?state.name:20
  }
}
