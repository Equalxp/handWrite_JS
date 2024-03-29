
/**
 * instanceof:构造函数的 prototype 是否出现
 * 在实例对象的原型链上
 */
function _instanceOf(L, R) {
  const baseType = ['string', 'number', 'boolean', 'undefined', 'symbol']
  if (baseType.includes(typeof L)) {
    return false
  }
  // 得到L.__proto__
  let proto = Object.getPrototypeOf(L)
  while (true) {
    // L为null
    if (proto === null) {
      return false
    }
    // 构造函数 的prototype 是否出现在 实例的原型链上
    if (proto === R.prototype) {
      return true
    }
    // 再次往上找
    proto = Object.getPrototypeOf(proto)
  }
}
function Person() { }
const obj = new Person()

// 构造函数的prototype是否在实例的原型链上
// 实例 instanceOf 构造函数
// console.log(obj instanceof Person)
console.log(_instanceOf(obj, Person)); //true

// 全都是false
// console.log(1 instanceof Number);
// console.log('1' instanceof String);
// console.log(true instanceof Boolean);