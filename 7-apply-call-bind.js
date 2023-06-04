// console.log('call----------------------------------------------------------');
// //js函数其实都是Function对象 Function对象是构造函数
// //构造函数有原型对象的 Function.prototype (call就存在于此)
// function person(a, b, c) {
//   // console.log(this.name);
//   // console.log(a, b, c);
//   return {
//     name:this.name,
//     a:a,
//     b:b,
//     c:c,
//   }
// }
// let egg = {
//   name: '技术蛋',
//   // person:function(){
//   //   //this隐式绑定 person有上下文对象时 就绑定this到上下文对象egg上
//   //   console.log(this.name);
//   // }
// }
// //call进行绑定 相当于在egg对象里加了一个person函数
// // person.call(egg)
// // egg.person()

// Function.prototype.newCall = function (obj) {
//   //防止第一个参数输入null报错 为什么不能用let???
//   // var obj = obj || window
//   if(obj === null||obj ===undefined){
//     obj = globalThis
//   }
//   // console.log(this);
//   //? 指向函数person
//   // 这里的this 是指向person这个函数的
//   obj.p = this //相当于给person添加了一个函数p
//   // 形式参数添加一个函数
//   let newArguments = []
//   //arguments对象 是newCall()里面的参数
//   for (let i = 1; i < arguments.length; i++) {
//     // newArguments.push('arguments[' + i + ']')
//     newArguments.push(arguments[i])
//     // 把参数都添加到数组里面了
//   }
//   // console.log(newArgument);
//   // 数组元素都带引号了 
//   // result = eval('obj.p(' + newArguments + ')') //官方禁止使用eval
//   result = obj.p(...newArguments) //只会显示第一个参数 解构赋值啊
//   // eval()可以接受一个字符串str作为参数，并把这个参数作为脚本代码来执行。
//   delete obj.p //要删除掉 不能改写对象
//   return result

// }
// let res = person.newCall(egg, 'lxp', 'is', 'sb')
// console.log(res);


// console.log('apply-----------------------------------------------------------');
// function person(a, b, c) {
//   return {
//     name: this.name,
//     a: a, b: b, c: c,
//   }
// }
// let egg1 = { name: '技术蛋' }
// Function.prototype.newApply = function (obj, arr) {
//   obj.p = this
//   if (!arr) {
//     obj.p()
//   } else {
//     let newArguments = []
//     for (let i = 0; i < arr.length; i++) {
//       newArguments.push(arr[i])
//     }
//     result = obj.p(...newArguments)
//   }
//   delete obj.p
//   return result
// }
// let res1 = person.newApply(egg1, ['罗潇鹏', '是', '傻逼'])
// console.log(res1);

// console.log('bind-----------------------------------------------------------');
// function person(a,b,c) {
//   console.log(this);
//   console.log(a,b);
//   console.log(c);
//   return a+b
// }
// let egg2 = { name: '技术蛋' }
// Function.prototype.newBind = function (obj, arr) {
//   let that = this//指向person函数
//   //用call方法 把slice切割方法 赋值给arguments对象 1是slice要接收的参数
//   arr = Array.prototype.slice.call(arguments,1)
//   console.log(arr); // 切割出来的东西
//   return function() {
//     // 这个返回函数 也有自己的argument 就是newBind的第二个括号
//     // person.call(obj)
//     // 传不进去第二个括号的参数 所以合并参数
//     // 只转化为数组 调用slice参数返回切割的数组
//     let arr2 = Array.prototype.slice.call(arguments)
//     arrSum = arr.concat(arr2)
//     return that.apply(obj,arrSum)
//   }
// }
// let res2 = person.newBind(egg2,'lxp','sbsb')('hyy')
// console.log(res2);


// console.log('bind-----------------------------------------------------------');
// function person(a, b, c) {
//   // 用了new this失效
//   console.log(this.name);
//   console.log(a, b, c);
//   // return a+b
// }
// person.prototype.x = '未知'
// let egg2 = { name: '技术蛋' }

// Function.prototype.newBind2 = function (obj, arr) {
//   // 调用bind的不是函数的话 报错要
//   if (typeof this !== "function") {
//     throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
//   }

//   let that = this//指向person函数
//   // 原型式继承
//   o = function () { }
//   arr = Array.prototype.slice.call(arguments, 1)
//   newf = function () {
//     // this是newf实例 this不是person函数 而是一个实例
//     // console.log(this instanceof newf);//true
//     // 这个函数里面的this是newf实例 就说明res2是reBindFunc的实例对象
//     let arr2 = Array.prototype.slice.call(arguments)
//     arrSum = arr.concat(arr2)
//     // 判断有没有使用new绑定
//     if (this instanceof o) {
//       // 当作为构造函数时，this 指向实例，此时结果为 true，
//       // 将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
//       that.apply(this, arrSum)
//     } else {
//       // 当作为普通函数时，this 指向 window，
//       // 此时结果为 false，将绑定函数的 this 指向 obj
//       that.apply(obj, arrSum)
//     }
//   }
//   // 我们直接将 newf.prototype = this.prototype，我们直接修改 fBound.prototype 的时候，
//   // 也会直接修改绑定函数的 prototype。
//   // 这个时候，我们可以通过一个空函数来进行中转：
//   o.prototype = that.prototype
//   newf.prototype = new o()
//   return newf
//   //这个返回函数是reBindFunce
// }
// // 当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效
// let reBindFunc = person.newBind2(egg2, 'lxp', 'sbsb')
// let res2 = new reBindFunc('hyy')
// console.log(res2.x);



// console.log('call----------------------------------------------------------');
// function person(x,y) {
//   // x是函数本省的参数
//   console.log(this.name);
//   console.log(x);
//   console.log(y);
// }
// let egg = {
//   name: '技术蛋'
// }
// Function.prototype.newCall = function (obj) {
//   // console.log(this);
//   obj.p = this
//   let newArgs = []
//   for (let i = 1; i < arguments.length; i++) {
//     newArgs.push(arguments[i])
//   }
//   // console.log(newArgs);
//   // newArgs是数组 要解构出来
//   obj.p(...newArgs)
//   delete obj.p
// }

// //修改this的指向 
// person.newCall(egg, 'lxp','sb')
// console.log('apply----------------------------------------------------------');
// function person(x, y) {
//   // x是函数本省的参数
//   console.log(this.name);
//   console.log(x);
//   console.log(y);
//   return x + y
// }
// let egg = {
//   name: '技术蛋'
// }
// Function.prototype.newApply = function (obj, arr) {
//   // console.log(this);
//   if (obj === null || obj === undefined) {
//     obj = globalThis
//   }
//   let result
//   obj.p = this
//   if (!arr) {
//     obj.p()
//   } else {
//     let newArgs = []
//     for (let i = 0; i < arr.length; i++) {
//       newArgs.push(arr[i])
//     }
//     result = obj.p(...newArgs)
//   }
//   delete obj.p
//   return result
// }

// //修改this的指向 
// let res = person.newApply(egg, ['lxp', 'sb'])
// console.log(res);


console.log('bind----------------------------------------------------------');
function person(x,y) {
  // x是函数本省的参数
  console.log(this.name);
  console.log(x,y);
}
let egg = {
  name: '技术蛋'
}
Function.prototype.newBind = function (obj) {
  let that = this//person 函数
  /**
   * slice的this指向arguments
   * slice里面 end = this.length / return result.push(this[i]);
   * 传了一个1就 截取1到end
   */
  let arr = Array.prototype.slice.call(arguments, 1)
  // console.log(arr);
  return function () {
    let arr2 = Array.prototype.slice.call(arguments)
    // console.log(arr2);
    arrSum = arr.concat(arr2)
    // console.log(arrSum);
    that.apply(obj,arr)
  }
}

//修改this的指向 
let res = person.newBind(egg,'lxp','is','sb')
// res('xlb','lxxp')
let b = new res('xlb','lxxp')