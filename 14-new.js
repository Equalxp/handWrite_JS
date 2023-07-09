

/**
 * new 操作
 * 1.const obj = {}
 * 2.obj.__proto__ = Person.prototype 
 * 1+2 = let obj = Object.create(func.prototype)
 * 3.Person.call(obj) this
 */

const _new = function (constructor, ...args) {
  // const obj = {}
  // obj.__proto__ = constructor.prototype
  let obj = Object.create(constructor.prototype)
  // 借用构造函数
  const res = constructor.apply(obj, args)
  // res是constructor的返回值 如果构造函数Person没有返回一个对象 就返回新创建的obj
  return res instanceof Object ? res : obj
}

function Person() {
  this.a = 1
  this.func = () => {
    console.log('lxp is sb');
  }
}
const obj = _new(Person)
console.log(obj.a);
obj.func()
