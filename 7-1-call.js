//call方法
function person(a, b ,c) {
  console.log(this.name);
  console.log(a, b, c);
  return a
}
let cityboy = {
  name: '长谷川',
}
// 让调用call方法的函数的 this 指向call里的参数
// let res = person.call(cityboy)
// console.log(res);
// js函数其实都是'Function对象' 'Function'是'构造函数'
// Funtion(构造函数)  --(new)-->  function f()  --(__proto__) -->  Function.prototype (原型对象)
//'构造函数'有'原型对象' ---> Function.prototype (call就存在于此)
Function.prototype.newCall = function (obj) {
  // 特殊情况 没传就指向全局
  if(obj === null || obj === undefined) {
    obj = globalThis
  }
  // 这里的this是person函数 obj.p = this 为obj追加了一个函数
  // 改变this的关键 传进来的obj(cityboy)里面添加了一个函数 this进行了绑定
  // console.log(this);//[Function: person]
  obj.p = this
  // 参数
  let newArgs = []
  // arguments是newCall()括号里面的形式参数
  // console.log(arguments); // 这里newArgs的参数是call函数要接收的第二个参数 也就是穿递给 person函数自身的参数
  for (let i = 1; i < arguments.length; i++) {
    // 参数都添加到数组
    newArgs.push(arguments[i])
  }
  // console.log(newArgs); 
  // 传参数进去 执行函数 *改变this的精髓 
  // p函数的this是指向obj的 运用的对象调用函数的技巧
  result = obj.p(...newArgs)
  // 不能改变对象
  delete obj.p
  return result
}
let res = person.newCall(cityboy,'beams','nautica','converse')
console.log('return返回结果:',res);

