// // function person1(a) {
// //   console.log(this);
// //   console.log(this.name);
// //   console.log(a + this.b);
// //   return a+this.b
// // }
// // egg = {
// //   name: 'lxp',
// //   b: 10
// // }
// // Function.prototype.newCall = function (obj) {
// //   if (obj === null | obj === undefined) {
// //     obj = globalThis
// //   }
// //   obj.p = this //this是这个perosn1函数
// //   let newArguments = []
// //   for (let i = 1; i < arguments.length; i++) {
// //     newArguments.push(arguments[i]) //把参数丢到一个数组里面
// //   }
// //   let result = obj.p(...newArguments) //p就是perosn1函数
// //   delete obj.p
// //   return result
// // }

// // let res = person1.newCall(egg, 1)
// // console.log(res);

// // console.log(foo);

// // function foo() {
// //   console.log("foo");
// // }

// // var foo = 1;


// console.log(Object.__proto__ === Function.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__);

// function Person(name) {
//   this.name = name
// }
// // 重写原型
// Person.prototype = {
//   getName: function() {}
// }
// var p = new Person('jack')
// console.log(p.__proto__);
// console.log(p.__proto__ === Person.prototype) // true
// // p.__proto__指向了另外的地址 而不是p.constructor.prototype
// console.log(p.__proto__ === p.constructor.prototype) // false

// var animal = function(){};
//  var dog = function(){};

//  animal.price = 2000;
//  dog.prototype = animal;
//  var tidy = new dog();
// //  Function.prototype.price = 99
//  console.log(dog.price) //undefined
//  console.log(tidy.price) // 2000

