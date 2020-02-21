import Router from "vue-router";
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import HelloEarth from "../components/HelloEarth"
import axios from "../components/axios"


Vue.use(Router)
export default  new Router({
  routes:[
    {
      name:"world",
      path:"/world/:name",
      component:HelloWorld
    },
    {
      name:'earth',
      path:'/earth',
      component:HelloEarth
    },
    {
      name:'axios',
      path:"/axios",
      component:axios
    }

  ]
})


