
let arr = [1, 2, 3]
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