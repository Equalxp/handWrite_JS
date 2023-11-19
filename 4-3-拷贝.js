
// 1.symbol做key
const s1 = Symbol('s1')
const s2 = Symbol('s2')
// 2.set做value
const set = new Set(['lxxp', 'hyyy'])

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
  // 3.symbol做value
  symbolKey: Symbol('symbolKey'),
  [s1]: 'aaa',
  [s2]: 'bbb',
  setKey: set
}
// 4.循环引用
person.self = person

function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType == 'object' || valueType == 'function')
}

function _completeDeepClone(target, map = new WeakMap()) {
  // 3.
  if (typeof target == 'symbol') {
    return Symbol(target.description)
  }
  if (!isObject(target)) {
    return target
  }
  if (map.get(target)) {
    return map.get(target)
  }
  const cloneTarget = Array.isArray(target) ? [] : {}
  map.set(target, cloneTarget)
  for (prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = _completeDeepClone(target[prop], map)
    }
  }
  // 1.symbol做key
  const symbolKeys = Object.getOwnPropertySymbols(target)
  for (const symbolKey of symbolKeys) {
    // console.log(symbolKey);// symbolKey就是s1 s2
    cloneTarget[Symbol(symbolKey.description)] = _completeDeepClone(target[symbolKey])
  }
  // 2.set做value
  if (target instanceof Set) {
    const newSet = new Set()
    for (item of target) {
      newSet.add(_completeDeepClone(item))
    }
    return newSet
  }
  return cloneTarget
}

const res = _completeDeepClone(person)
console.log(res);
