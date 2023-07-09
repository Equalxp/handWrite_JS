
function add(x, y, z) {
  console.log(x + y + z);
}

function sum(num1, num2) {
  return num1 + num2
}

// 手写
function lxpCurrying(fn) {
  function curryFn(...args) {
    if (args.length >= fn.length) {
      // 第二类操作-执行函数
      // fn.length fn是函数 length为函数参数的个数  
      return fn(...args)
    } else {
      // 第一类操作-返回函数
      return function (...newArgs) {
        return curryFn(...args.concat(newArgs))
      }
    }
  }
  return curryFn
}

let addCurry = lxpCurrying(add)
addCurry(1)(3)(5)

let sumCurry = lxpCurrying(sum)
console.log(sumCurry(8,1));