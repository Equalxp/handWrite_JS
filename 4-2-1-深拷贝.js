
/**
 * 简易深拷贝
 * 数组、普通对象、基本数据类型
 * 无循环引用
 */

function isObject(value) {
  // 类型
  const valueType = typeof value
  return (value !== null) && (valueType === 'object' || valueType === 'function')
}
const _sampleDeepClone = (target) => {
  // 普通数据
  if (!isObject(target)) {
    return target
  } else {
    // 对象和数组
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (prop in target) {
      // 能被forin取出的key值 取出key值
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = _sampleDeepClone(target[prop])
      }
    }
    return cloneTarget
  }
}

const person = {
  name: 'lxxp',
  age: 18,
  gf: {
    name: 'hyy',
    bf: {
      name: 'LXP',
      hobby: ['kiss', 'basketball']
    }
  }
}



const res = _sampleDeepClone(person)
console.log(res);

res.gf.name = 'hyyy'
console.log(res);
console.log(person);
