function Vue(opt) {
  this._init(opt)
}
Vue.prototype._init = function (opt) {
  console.log(this)
}

new Vue()
