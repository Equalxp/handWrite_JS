// //bind方法
// function person(a, b, c) {
//   // 有new的 this就失效了
//   console.log(this.name);
//   console.log(a, b);
//   console.log(c);
//   // return c
// }

// person.prototype.x = 'x因素'

// let cityboy = {
//   name: '长谷川',
// }
// Function.prototype.newBind = function (obj, arr) {
//   // 调用bind的不是函数的话 报错
//   if (typeof this !== "function") {
//     throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
//   }
//   // 保存this 指向person函数
//   let context = this
//   // 原型式继承
//   o = function () { }
//   // 用call方法 把slice方法 赋值给arguments对象 1是slice()要接收的参数
//   // slice.call(arguments,1) 返回的是
//   // console.log(arguments);//伪数组 有length属性 length = 3
//   arr = Array.prototype.slice.call(arguments, 1)
//   /**
//    * Array.prototype.slice.call(arguments) slice的this指向arguments
//    * Array.slice => 返回值是数组 slice方法中 ...end = end || this.length return result.push(this[i]); 返回一个数组
//    * this改变到arguments身上了 首先让arguments变成数组 再slice
//    */
//   // console.log(arr);
//   newFunc = function () {
//     // 如果返回函数前有new 就是new了这个newFunc函数
//     // newFunc里面的this那就是newFunc的实例
//     // console.log(this instanceof newFunc);//true

//     // arr2 是newBind 返回函数的参数
//     // 这里进行数组的转化 :slice切割方法 返回一个数组
//     let arr2 = Array.prototype.slice.call(arguments)
//     // 进行参数的合并 一起传递给person函数
//     arrSum = arr.concat(arr2)
//     // 判断返回函数是否有new绑定
//     if (this instanceof o) {
//       // 当作为构造函数时，this 指向实例
//       // 将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
//       context.apply(this, arrSum)
//     } else {
//       // 当作为普通函数时，this 指向 window，
//       // 将绑定函数的 this 指向 obj
//       context.apply(obj, arrSum)
//     }
//   }
//   // 我们直接将 newFunc.prototype = this.prototype，我们直接修改 fBound.prototype 的时候，
//   // 也会直接修改绑定函数的 prototype。
//   // 这个时候，我们可以通过一个空函数来进行中转：
//   o.prototype = context.prototype
//   newFunc.prototype = new o()
//   // 返回函数
//   return newFunc
// }
// // 调用newBind函数 会 返回一个函数
// let bindReturnFunc = person.newBind(cityboy, 'beams', 'nautica')
// // new情况
// // let res = bindReturnFunc('star please')
// // console.log(res.x);
// // 普通情况
// let res = bindReturnFunc('star please')
// console.log(res);

{
  //   function fn(a, b, c, d) {
  //     console.log(a, b, c, d);
  //     console.log(this);
  //     return 123
  //   }
  //   Function.prototype._bind = function (ctx) {
  //     // bind函数的参数
  //     const args = Array.prototype.slice.call(arguments, 1)
  //     var fn = this
  //     // 1.具名函数
  //     return function A() {
  //       // 说明res1是newFn的实例
  //       console.log("A", this instanceof A); // A {} // true

  //       // 新函数的参数
  //       const restArgs = Array.prototype.slice.call(arguments)
  //       // 全部参数
  //       var allArgs = args.concat(restArgs)
  //       // 使用new方法调用的这个函数 
  //       // 调用了new 实例会绑定到函数调用的this
  //       if (Object.getPrototypeOf(this) === A.prototype) {
  //         // 就用new调用
  //         return new fn(...allArgs)
  //       } else {
  //         return fn.apply(ctx, allArgs)
  //       }
  //     }
  //   }
  //   const newFn = fn._bind('ctx', 1, 2)
  //   // newFn的返回值要和apply的一致 所以直接返回fn.apply(ctx, allArgs)
  //   // const res = newFn(3, 4)
  //   // console.log(res);
  //   // 特殊
  //   const res1 = new newFn(3, 4)
  //   console.log(res1);
  // }

  // function person(a, b, c) {
  //   // 有new的 this就失效了
  //   console.log(this.name);
  //   console.log(a, b);
  //   console.log(c);
  //   // return c
}

{
  function person(a, b, c) {
    // 有new的 this就失效了
    console.log(this.name);
    console.log(a, b, c);
    // return c
  }

  person.prototype.x = 'x因素'

  let cityboy = {
    name: '长谷川',
  }
  Function.prototype.newBind = function (obj) {
    if (typeof this !== 'function') {
      return new TypeError('错误')
    }
    const fn = this
    const Args = Array.prototype.slice.call(arguments, 1)
    // 调用new 实例会绑定到函数调用的this
    // res表示this 返回函数设为具名函数
    const temp = function () { }
    newFn = function () {
      const restArgs = Array.prototype.slice.call(arguments)
      const allArgs = Args.concat(restArgs)
      // if (this instanceof temp) {
      if (this instanceof newF) {
        // 把this绑定到新实例上 this是一个实例
        fn.apply(this, allArgs)
      } else {
        fn.apply(obj, allArgs)
      }
    }
    // newFn的实例可以用到 person原型对象的属性
    // newFn.prototype = fn.prototype // 直接修改原型对象有弊端
    // newFn就是bindFn
    temp.prototype = fn.prototype
    newFn.prototype = new temp
    // newFn.prototype = Object.create(fn.prototype)
    return newFn
  }
  const bindFn = person.newBind(cityboy, 1, 2)
  const res = new bindFn(3)
  console.log(res);
}