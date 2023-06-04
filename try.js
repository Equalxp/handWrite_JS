// function person1(a) {
//   console.log(this);
//   console.log(this.name);
//   console.log(a + this.b);
//   return a+this.b
// }
// egg = {
//   name: 'lxp',
//   b: 10
// }
// Function.prototype.newCall = function (obj) {
//   if (obj === null | obj === undefined) {
//     obj = globalThis
//   }
//   obj.p = this //this是这个perosn1函数
//   let newArguments = []
//   for (let i = 1; i < arguments.length; i++) {
//     newArguments.push(arguments[i]) //把参数丢到一个数组里面
//   }
//   let result = obj.p(...newArguments) //p就是perosn1函数
//   delete obj.p
//   return result
// }

// let res = person1.newCall(egg, 1)
// console.log(res);

console.log(foo);

function foo() {
  console.log("foo");
}

var foo = 1;


