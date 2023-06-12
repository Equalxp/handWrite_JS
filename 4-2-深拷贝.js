console.log('深拷贝------------------------------------');

// 判断是否是对象的函数
function isObject(value) {
  const valueType = typeof value
  return (value!==null) && (valueType === 'object'||valueType === 'function')
}
const map = new WeakMap()
// 优化map 当作一个参数传进去 
function deepCopy(obj) {
  // 是否是对象
  if(!isObject(obj)){
    return obj
  }
  // 如果是set类型
  if(obj instanceof Set) {
    const newSet = new Set()
    // 
    for(const setItem of obj) {
      newSet.add(deepCopy(setItem))
    }
    return newSet
  }
  // 如果是函数类型
  if(isObject(obj) == 'function') {
    return obj
  }
  
  if(map.get(obj)) {
    return map.get(obj)
  }
  //1.一个新的对象 数组类型
  const newObj = Array.isArray(obj) ? [] : {}
  // 让self对象指向已经拷贝的对象{} 提前保存这个对象
  map.set(obj,newObj)
  // 2.拿到key值
  for(const key in obj) {
    // 3.递归
    newObj[key] = deepCopy(obj[key])
  }

  return newObj
}

const set = new Set(['a','b','c'])
const person = {
  name:'lxxp',
  age:18,
  gf:{
    name:'hyy',
    bf:{
      name:'LXP',
      hobby:['kiss','basketball']
    }
  },
  // set 用 forin无效
  set:set,
  // 函数类型一般不需要进行深拷贝
  fuck:function() {
    console.log('fuck you!');
  },
}
// 循环引用 
person.self = person

const newObj = deepCopy(person)
console.log(newObj);
// 循环引用
console.log(newObj.person === newObj); //true
// console.log(newObj);

// console.log('深拷贝-------------------------------------');
// // 深拷贝拷贝多层, 每一级别的数据都会拷贝.
// var obj = {
//   id: 1,
//   name: 'andy',
//   msg: {
//       age: 18
//   },
//   //对象
//   color: ['pink', 'red']
// };
// var o = {};
// // 封装函数 递归
// function deepCopy(newobj, oldobj) {
//   for (var k in oldobj) {
//       // 判断我们的属性值属于那种数据类型
//       // 1. 获取属性值  oldobj[k]
//       // 属性值有 ：1.简单的 2.{}对象 3.[]数组
//       // k 是属性名   obj[k] 属性值 键值对
//       var item = oldobj[k];
//       // item 拿到要被拷贝的东西的各 属性值 {}[]pt
//       // 2. 判断这个值是否是数组
//       if (item instanceof Array) {
//           newobj[k] = [];
//           //newobj[k]是属性值
//           // k是color
//           // newobj是新对象
//           // o.color=[] 表示这是一个数组类型
//           deepCopy(newobj[k], item)
//       } else if (item instanceof Object) {
//           // 3. 判断这个值是否是对象
//           newobj[k] = {};
//           deepCopy(newobj[k], item)
//       } else {
//           // 4. 属于简单数据类型
//           newobj[k] = item;
//           //id=1
//       }

//   }
// }
// deepCopy(o, obj);
// console.log(o);

// var arr = [];
// console.log(arr instanceof Object);
// o.msg.age = 20;
// console.log(obj);














