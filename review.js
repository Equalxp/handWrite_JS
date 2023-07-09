// //call方法
// function person(arg1) {
//   console.log(this.name);
//   console.log(arg1);
//   return this.name + arg1
// }
// let lxp = {
//   name: 'lxxp'
// }

// Function.prototype.newCall = function (obj) {
//   if (obj == null || obj == undefined) {
//     obj = globalThis
//   }
//   //1.给obj追加一个函数 obj就是函数需重新指向的对象
//   // console.log(this); // this指向perosn函数
//   obj.fn = this
//   //2.参数处理
//   let newArgs = []
//   // console.log(arguments); // newArgs需要接收的参数是 call的第二个参数
//   for (let i = 1; i < arguments.length; i++) {
//     newArgs.push(arguments[i])
//   }
//   // console.log(newArgs);// 形成一个数组
//   let res = obj.fn(...newArgs)
//   delete obj.fn
//   return res
// }

// // res是person函数自己的返回值
// let res = person.newCall(lxp, 'hyy')
// // let res = person.call(lxp,'hyy')

// console.log(res);

// function person(...arg1) {
//   console.log(this.name);
//   console.log(arg1);
//   return this.name + arg1
// }
// let lxp = {
//   name: 'lxxp'
// }
// //argArr
// Function.prototype.lxpApply = function (obj, argArr) {
//   if (obj == null || obj == undefined) {
//     obj = globalThis
//   }
//   // 因为参数是数组 
//   obj.fn = this
//   // console.log(arguments[1]);
//   if (!argArr) {
//     obj.fn()
//   } else {
//     let newArgs = []
//     for (let i = 0; i < argArr.length; i++) {
//       newArgs.push(argArr[i])
//     }
//     var res = obj.fn(...newArgs)
//   }
//   delete obj.fn
//   return res
// }

// let res = person.lxpApply(lxp, [1, 2, 3, 4])
// console.log(res);

function person(arg1, arg2) {
  console.log(this.name);
  console.log(arg1, arg2);
  return this.name + arg1
}
let lxp = {
  name: 'lxxp'
}

Function.prototype._call = function (obj) {
  if (obj == null || obj == undefined) {
    obj = globalThis
  }
  let newArgs = []
  for (let i = 1; i < arguments.length; i++) {
    newArgs.push(arguments[i])
  }
  obj.p = this
  let res = obj.p(...newArgs)
  delete obj.p
  return res
}
person._call(lxp, 1, 2)

// Function.prototype.lxpBind = function (obj, arrArgs) {
//   if (typeof this !== 'function') {
//     throw new Error('give me a fucking Functoin')
//   }
//   let context = this
//   // console.log(this); // person
//   arrArgs = Array.prototype.slice.call(arguments, 1)

//   // console.log(arrArgs);
//   newFunc = function () {
//     // 数组转化
//     let arrArgs2 = Array.prototype.slice.call(arguments)
//     // 参数合并
//     let arrSum = arrArgs.concat(arrArgs2)
//     // console.log(arrSum);
//     context.apply(obj, arrSum)
//   }
//   return newFunc

// }

// // 返回一个函数
// let res = person.lxpBind(lxp, 'hyy', 'lxp')
// // let res = person.bind(lxp,'hyy','lxxp') //[Function: bound person]
// console.log('返回的函数:', res);
// let res2 = res()
// console.log('返回函数的返回值:', res2);