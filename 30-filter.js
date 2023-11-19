
/**
 * 1.判断
 * 2.新数组 返回
 * 3.循环数组每一项 调用函数 满足条件的加入新数组
 */
const array = [1, 2, 34, 45, 213, 11]
const res1 = array.filter((item) => {
  return item > 99
})
console.log('res1', res1);


Array.prototype._filter = function (Fn) {
  if (typeof Fn !== 'function') return
  const newArr = []
  const arr = this
  // for循环
  for (let i = 0; i < arr.length; i++) {
    // res表示true/false
    // const res = Fn.call(arguments[1], arr[i], i, arr)
    // 1.执行函数 res是bool
    const res = Fn(arr[i])
    // 2.判断条件再push
    res && newArr.push(arr[i])
  }
  return newArr
}
const res = array._filter((item) => {
  return item > 10
})
console.log(res);