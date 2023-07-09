

/**
 * 简易深拷贝
 * 数组、普通对象、基本数据类型
 * 无循环引用
 */

function isObject(value) {
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
      // 取出key值
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

// // 判断是否是对象 的函数
// function isObject(value) {
//   const valueType = typeof value
//   return (value!==null) && (valueType === 'object'||valueType === 'function')
// }
// const map = new WeakMap()
// // 优化map 当作一个参数传进去 
// function deepCopy(obj) {
//   // 是否是对象--不是对象
//   if(!isObject(obj)){
//     return obj
//   }
//   // 如果是set类型
//   if(obj instanceof Set) {
//     const newSet = new Set()
//     // 
//     for(const setItem of obj) {
//       newSet.add(deepCopy(setItem))
//     }
//     return newSet
//   }
//   // 如果是函数类型
//   if(isObject(obj) == 'function') {
//     return obj
//   }

//   if(map.get(obj)) {
//     return map.get(obj)
//   }
//   // 1.一个新的对象 数组类型
//   const newObj = Array.isArray(obj) ? [] : {}
//   // 让self对象指向已经拷贝的对象{} 提前保存这个对象
//   map.set(obj,newObj)
//   // 2.拿到key值 
//   for(const key in obj) {
//     // 3.递归
//     newObj[key] = deepCopy(obj[key])
//     // newObj[key] = 意思是 { name(key):'?' }
//     // obj[key] 意思是给 name(key)赋值 obj[key]可以是普通属性 或者 对象...
//   }

//   return newObj
// }

// const set = new Set(['a','b','c'])
// const person = {
//   name:'lxxp',
//   age:18,
//   gf:{
//     name:'hyy',
//     bf:{
//       name:'LXP',
//       hobby:['kiss','basketball']
//     }
//   },
//   // set 用 forin无效
//   set:set,
//   // 函数类型一般不需要进行深拷贝
//   fuck:function() {
//     console.log('fuck you!');
//   },
// }
// // 循环引用 新增了一个属性 属性值就是对象本身
// person.self = person

// const newObj = deepCopy(person)
// console.log(newObj);
// // 循环引用
// console.log(newObj.person === newObj); //true
// // console.log(newObj);
