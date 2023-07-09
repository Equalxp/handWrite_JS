
const arr = [1, 2, [1, [2, 3, [4, 5, [6]]]]]

// 1.转化为字符串
function flatter1(arr) {
  if (!arr.length) {
    return
  }
  return arr.toString().split(',').map(item => {
    return Number(item)
  })
}
// 2.reduce/concat 和for循环相似
function flatter2(arr) {
  // pre是上次reduce返回的值 item是arr循环取出的值
  return arr.reduce((pre, item) => {
    return pre.concat(Array.isArray(item) ? flatter2(item) : item)
  }, [])
}
// 3. .../concat
function flatter3(arr) {
  // 只要arr里面还有数组 就逐一取出来 ...
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
// 4.for 递归
let res = [] //res定义在外面
function flatter4(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatter4(arr[i])
    } else {
      // 结果数组
      res.push(arr[i])
    }
  }
  return res
}
console.log(flatter4(arr));