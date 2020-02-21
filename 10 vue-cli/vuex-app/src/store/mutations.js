export default {
  increase: function (state,newData) {
    state.name += newData;
  },
  decrease(state,newData){
    state.name -=newData;
  },
}
