
/**
 *  需要考虑函数、正则、日期、ES6新对象
 *  需要考虑循环引用问题 
 */
function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === 'object' || valueType === 'function')
}
// 执行完之后销毁
// const map = new Map()
function _completeDeepClone(target, map = new WeakMap()) {
  // 如果value是symbol
  if (typeof target === 'symbol') {
    // symbol里面有description 新建一个symbol
    return Symbol(target.description)
  }
  // 普通数据类型
  if (!isObject(target)) {
    return target
  }
  // value是set类型的 因为set不能forin遍历
  if (target instanceof Set) {
    const newSet = new Set() // 新的set
    for (const item of target) {
      // set里面也可能是对象
      newSet.add(_completeDeepClone(item))
    }
    return newSet
  }
  // 2.函数类型 不需要深拷贝 就是用来执行的
  if (typeof target === 'function') {
    return target
  }
  // 下方调用_completeDeepClone的时候 又会创建新对象 判断原来是否有
  if (map.get(target)) {
    return map.get(target)
  }
  const cloneTarget = Array.isArray(target) ? [] : {}
  // 这个 {} 就是person对象的拷贝对象 让循环引用的self对象指向{}就行
  // 把拷贝对象提前保存一份到map中
  map.set(target, cloneTarget)
  for (prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = _completeDeepClone(target[prop], map)
    }
  }
  // 单独遍历symbol的keys 取出symbol的key组成数组
  const symbolKeys = Object.getOwnPropertySymbols(target)
  for (const symbolKey of symbolKeys) {
    // key要新创建
    cloneTarget[Symbol(symbolkey.description)] = _completeDeepClone(target[symbolkey])
  }
  return cloneTarget
}

// 1.set 不能forin
const set = new Set(['lxxp', 'hyyy'])
// 4.symbol当作key
const s1 = Symbol('s1')
const s2 = Symbol('s2')
const person = {
  name: 'lxxp',
  age: 18,
  gf: {
    name: 'hyy',
    bf: {
      name: 'LXP',
      hobby: ['kiss', 'basketball']
    }
  },
  // 特殊类型
  // 3.函数
  do: () => {
    console.log('do sth');
  },
  set: set,
  symbolKey: Symbol('SB'),
  // forin不了 key为symbol的值
  [s1]: 'aaa',
  [s2]: 'bbb',
}
// 5.循环引用
person.self = person

const res = _completeDeepClone(person)
console.log(res);


res.gf.name = 'hyyy'
console.log(res);
console.log(person);
// true
console.log(res.symbolKey === person.symbolKey);
console.log(res.self);


/**
 * const _completeDeepClone = (target, map = new Map()) => {
 * // 补全代码
    if(target === null) return target
    if(typeof target !== 'object') return target
    const constructor = target.constructor
    if(/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) return new constructor(target)
    if(map.get(target)) return map.get(target)
    map.set(target, true)
    const cloneTarget = Array.isArray(target) ? [] : {}
    for(prop in target) {
        if(target.hasOwnProperty(prop)) {
            cloneTarget[prop] = _completeDeepClone(target[prop], map)
        }
    }
    return cloneTarget
  }
 */