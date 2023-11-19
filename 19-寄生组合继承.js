
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
  // 继承父的属性
  Person.call(this, name)
}
/**
 * 创建一个空对象
 * 对象的隐式原型指向父类的显示原型
 * 把对象赋值给子类的显示原型
 */
function inherit(sub, sup) {
  // 子 父
  // // 创建一个对象 当作临时的中转
  // let obj = {}
  // // 对象的隐式原型指向父类的显示原型
  // obj.__proto__ = sup.prototype
  // // 子类的显示原型指向obj
  // sub.prototype = obj
  // // 每new一个sub 其__proto__(原型链)指向obj obj的__proto__就指向 sup.prototype

  let obj = Object.create(sup.prototype)
  sub.prototype = obj
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