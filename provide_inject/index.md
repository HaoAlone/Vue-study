### 依赖注入
允许祖先组件向任意一级子组件注册依赖,传递数据
> provide 选项应该是一个对象或返回一个对象的函数。该对象包含可注入其子孙的 property。在该对象中你可以使用 ES2015 Symbols 作为 key，但是只在原生支持 Symbol 和 Reflect.ownKeys 的环境下可工作。
>inject 选项应该是： 
> * 一个字符串数组， 
> * 一个对象，对象的 key 是本地的绑定名，value 是：  
> 在可用的注入内容中搜索用的 key (字符串或 Symbol)，或  
> 一个对象，该对象的：  
> from property 是在可用的注入内容中搜索用的 key (字符串或 Symbol)
> default property 是降级情况下使用的 value

```js
// 父级组件提供 'foo'
var Provider = {
  provide: {
    foo: 'bar'
  },
  // ...
}

// 子组件注入 'foo'
var Child = {
  inject: ['foo'],
  created () {
    console.log(this.foo) // => "bar"
  }
  // ...
}
```
***提示：provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的 property 还是可响应的。*** <br>
优点：
祖先组件不需要知道哪些后代组件使用它提供的属性；
后代组件不需要知道被注入的属性来自哪里；   
缺点：
组件间的耦合较为紧密，不易重构；
提供的属性是非响应式的；
