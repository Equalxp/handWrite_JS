
let arr = [1, 2, 3]
// 回调的参数 当前值 当前索引 整个数组
let res = arr.map((item) => {
  return item * 2
})
console.log(res);
/**
 * 1.返回一个新数组
 * 2.传一个函数
 * 3.循环arr的值 调用函数的参数 将返回值添加到新数组中
 */
Array.prototype._map = function (fn) {
  if (typeof fn !== 'function') return
  let array = this //原数组
  let newArr = [] // 新数组
  for (const item of array) {
    newArr.push(fn(item))
  }
  return newArr
}

console.log(arr._map((item) => {
  return item * 2
}));


Array.prototype.lxpmap = function (callbackFn, thisArg) {
  // 处理数组异常
  if (this === null || this === undefined) {
    throw new TypeError('Cannot read property map of null or undefined')
  }
  // 处理回调函数异常
  if (Object.prototype.toString.call(callbackFn) != '[object Function]') {
    throw new TypeError(callbackfn + ' is not a function')
  }

  // 草案中提到要先转换为对象
  let O = Object(this)
  let T = thisArg

  // 右移 0 位 前面的空位用0填充
  let length = O.length >>> 0
  let A = new Array(length)
  for (let k = 0; k < length; k++) {
    // 还记得原型链那一节提到的 in 吗？in 表示在原型链查找
    // 如果用 hasOwnProperty 是有问题的，它只能找私有属性
    if(k in O) {
      let kValue = O[k]
      // 依次传入this, 当前项，当前索引，整个数组
      let mappedValue = callbackFn.call(T,kValue,k,O)
      A[k] = mappedValue
    }
  }
  return A
}