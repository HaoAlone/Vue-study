import vue from "vue"
import vuex from "vuex"
import mutations from "./mutations"
import actions from './actions'
import getters from "./getters"

vue.use(vuex)

export  default new vuex.Store({
  state:{
    name:10
  },
  mutations,
  actions,
  getters
})
