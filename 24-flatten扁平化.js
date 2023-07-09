
const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 }
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3
}

// function isObject(val) {
//   // 不为空 是对象
//   return typeof val === 'object' && val !== null;
// }
// // 对象扁平化
// function _flatten(obj) {
//   if (!isObject(obj)) {
//     return;
//   }
//   let res = {};
//   const dfs = (value, key) => {
//     // 引用类型数据 基础类型数据
//     if (isObject(value)) {
//       // 数组 对象
//       if (Array.isArray(value)) {
//         value.forEach((item, index) => {
//           dfs(item, `${key}[${index}]`);
//         });
//       } else {
//         for (let k in value) { //value[k] 是值 
//           dfs(value[k], `${key}${key ? "." : ""}${k}`);
//         }
//       }
//     } else {
//       res[key] = value;
//     }
//   };
//   dfs(obj, "");

//   return res;
// }

function _flatten1(obj) {
  // 返回结果也是一个对象
  let result = {};
  let process = (key, value) => {
    // 首先判断是基础数据类型还是引用数据类型
    if (Object(value) !== value) {
      // 基础数据类型
      if (key) {
        result[key] = value;
      }
    } else if (Array.isArray(value)) { //数组类型
      for (let i = 0; i < value.length; i++) {
        process(`${key}[${i}]`, value[i])
      }
      if (value.length === 0) {
        result[key] = [];
      }
    } else {
      let objArr = Object.keys(value);// 取出key值
      objArr.forEach(item => {
        // 第一次调用没有key 
        process(key ? `${key}.${item}` : `${item}`, value[item])
      });
      if (objArr.length === 0 && key) {
        result[key] = {};
      }
    }
  }
  process('', obj)
  return result
}
console.log(_flatten1(obj));
