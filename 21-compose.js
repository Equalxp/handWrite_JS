// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
// compose返回一个函数
// 从右往左求值
console.log(fn1(fn2(fn3(fn4(1)))));
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11

/**
 * 1.组合函数后返回新的函数
 * 2.从右往左求值
 */
// 1.参数是一堆函数
function compose(...fn) {
  // 2.1没有传函数
  if (!fn.length) return (v) => v
  // 2.2传了一个函数 就直接返回第一个的值
  if (fn.length === 1) return fn[0]
  // 2.3reduce
  // 3.返回函数
  return fn.reduce((pre, cur) => {
    // 每次返回一个没有求值的函数 所以是从右往左边计算 redux源码:
    return (...args) => pre(cur(...args))
    // 然后每次都从内往外执行函数
    // pre没有传初始值 第一次pre就会是return返回的值 [Function: fn1]
  })
}


// 迭代的方式 
function compose1(...fns) {
  // args就是a函数的参数 返回一个函数
  return (...args) => {
    // 函数的参数/结果
    let preResult = args
    // 从右到左
    for (let i = fns.length - 1; i >= 0; i--) {
      const fn = fns[i] // 一个一个取出函数
      // 参数值的数量
      preResult = Array.isArray(preResult) ?
        fn(...preResult) : fn(preResult)
    }
    return preResult
  }
}