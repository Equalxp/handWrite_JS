
/**
 * 函数创建一个新对象
 * 用现有的对象来提供新创建的对象的__proto__
 * let obj = Object.create(X) 
 * obj.__proto__ = X
 * 第一个参数:新建对象的原型对象
 * 第二个参数:在生成的实例对象上添加属性
 */

Object.prototype._create = function (proto) {
  if (typeof proto !== 'object' || proto === null) return
  const fn = function () { }
  fn.prototype = proto
  return new fn()
}

// x.__proto__ = proto
Object.prototype._create = function (proto) {
  if (typeof proto !== 'object' || proto === null) {
    return
  }
  // 中间函数
  const fn = function() {}
  fn.prototype = proto
  return new fn()
  // new出来的实例的 __proto__ 都会指向proto
}

var x = Object._create({
  name: 'lxxp'
})

console.log(x);
console.log(x.__proto__); //{ name: 'lxxp' }
