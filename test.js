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
