
const _shallowClone = (target) => {
  if (typeof target === 'object' && target !== null) {
    const constructor = target.constructor
    // 2.如果是函数、正则、日期、ES6新对象 就返回该参数
    if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) {
      return target
    }
    // 3.判断该参数为普通对象或数组并创建相应数据类型的新变量
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (prop in target) {
      if (target.hasOwnProperty(prop)) {
        // 将对象参数的每一项赋值给新变量
        cloneTarget[prop] = target[prop]
      }
    }
    return cloneTarget
  } else {
    // 1.如果参数不是object/null 直接返回参数
    return target
  }
}

const info = {
  name: 'lxxxp',
  age: 20,
  gf: {
    name: 'hyyyy'
  },
  fn: () => {
    console.log('lxp is SB');
  }
  // obj:info
}
console.log(_shallowClone(info));