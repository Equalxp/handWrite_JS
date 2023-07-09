
function Person(name) {
  this.name = name
  this.eating = function () {
    console.log('吃饭');
  }
}
Person.prototype.fuck = () => {
  console.log('fuck you!');
}
function Student(name) {
  Person.call(this, name)
}
/**
 * 创建一个对象
 * 对象的隐式原型指向父类的显示原型
 * 吧对象赋值给子类的显示原型
 */
function inherit(sub, sup) {
  // 
  let obj = Object.create(sup.prototype)
  sub.prototype = obj //重写了
  Object.defineProperty(sub.prototype, 'constructor', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: sub
  })
}
inherit(Student, Person)

let stu1 = new Student('lxxp')
console.log(stu1.name);
stu1.eating()
stu1.fuck()