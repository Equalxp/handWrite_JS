
// 模版字符串的解析
let _template = '我是￥{name},年龄￥{age}'
let data = {
  // 对象里的属性名是字符串形式的
  name: 'lxxp',
  age: 20
}
// console.log(data['name']);
// console.log(Object.keys(data));

function render(template, data) {
  const reg = /\￥\{(\w+)\}/
  // 还有￥{}
  if (reg.test(template)) {
    // match获取key值
    const key = template.match(reg)[1] //name //match会返回一个匹配的数组
    // 使用 replace 方法替换变量为真实的数据
    template = template.replace(reg, data[key])
    // 注意这里的逻辑，递归调用自身，直到字符串中不存在 ${xxx}
    return render(template, data) //递归
  }
  return template
}

// function render1(template, data) {
//   // 全局匹配正则 
//   const reg = /\￥\{(\w+)\}/g
//   // console.log(template.match(reg))// [ '￥{name}', '￥{age}' ] 就是匹配到的子串
//   // 第一个参数是reg/g 那么replace第二个参数函数 会调用多次
//   // match是匹配到的子串
//   // key被匹配的原字符串。
//   return template.replace(reg,(match,key) =>{
//     // console.log(match); //￥{name} ￥{age}
//     // console.log(key); // name age
//     return data[key]
//   })
// }

let res = render(_template, data)
console.log(res);