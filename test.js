class PersonClass {
    constructor(name) {
        this.name = name
    }
    sayName(){
        console.log(this.name)
    }
}

let person = new PersonClass('王博士')
console.log(person) //PersonClass { name: '王博士' }
console.log(person instanceof PersonClass) //true
console.log(person instanceof Object) // true

console.log(typeof PersonClass) // function
console.log(typeof PersonClass.prototype.sayName) // function

let obj = {
    name:'王刚',
    age:22,
    s:''
}

let data = 12
Object.defineProperty(obj,'s',{
    get:function(){
        console.log('触发get')
        return data
    },
  set:function(newVal){
      console.log('触发set')
      data = newVal
      console.log('obj:'+obj)
  }
})
a = obj.s