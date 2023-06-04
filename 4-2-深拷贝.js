console.log('深拷贝------------------------------------');

function deepClone(oldObj, map = new Map()) {
  if (typeof oldObj === 'object' && oldObj !== null) {
    // 设置缓存 
    const cache = map.get(target);
    // 判断缓存
    if (cache) {
      return cache;
    }
    // 判断容器 确定类型
    const newObj = Array.isArray(oldObj) ? [] : {}
    // 1.设置缓存 K-V k什么都可以是
    map.set(target, newObj);
    // forin遍历
    for (const key in oldObj) {
      if (oldObj.hasOwnPropery(key)) {
        // 上一次map缓存的结果传进去
        newObj[key] = deepClone(oldObj[key], map)
      }
    }
    return newObj
  } else {
    return oldObj
  }
}
function deepClone1(oldObj, map = new Map()) {
  if (typeof oldObj === 'object' && oldObj !== null) {
    // 设置缓存 
    const cache = map.get(oldObj);
    // 判断缓存
    if (cache) {
      return cache;
    }
    // 判断容器 确定类型
    const isArray = Array.isArray(oldObj)
    const newObj = isArray ? [] : {}
    // 1.设置缓存 K-V 在map里面k什么都可以是
    map.set(oldObj, newObj);
    if(isArray){
      oldObj.forEach((item,index)=>{
        newObj[index] = deepClone1(item,map)
      })
    }else{
      Object.keys(oldObj).forEach((key)=>{
        newObj[key] = deepClone1(newObj[key],map)
      })
    }
    return newObj
  } else {
    return oldObj
  }
}
// 解决循环引用
const obj = {
  a: 1,
  b: { m: 2 },
  c: [1, 2, 3],
  d() { },
}
obj.c.push(obj.b)
obj.b.j = obj.c
console.log(obj);
const cloneobj = deepClone(obj)

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














