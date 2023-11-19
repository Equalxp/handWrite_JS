
const arr = [1, 2, [1, [7, 8, 9], [2, 3, [4, 5, [6]]]]]
console.log(arr.toString());//1,2,1,2,3,4,5,6

// 1.转化为字符串
function flatter1(arr) {
  if (!arr.length) {
    return
  }
  return arr.toString().split(',').map(item => {
    return Number(item)
  })
}
// 1.1 
function flatter(arr) {
  if (!arr.length) {
    return
  }
  // let str = JSON.stringify(arr);
  let str = arr.toString() // 变成字符串
  return str.replace(/(\[|\])/g, '').split(',').map(item => Number(item))
}
// 2.reduce/concat 和for循环相似
function flatter2(arr) {
  // pre是上次reduce返回的值 item是arr循环取出的值
  return arr.reduce((pre, item) => {
    // [].concat连接数组
    return pre.concat(Array.isArray(item) ? flatter2(item) : item)
  }, [])

  // 递归
  return arr.reduce((pre,cur) => {
    return pre.concat(Array.isArray(cur) ? flatter2(cur) : cur) 
  },[])
}
// 3. .../concat
function flatter3(arr) {
  // 只要arr里面还有数组 就逐一取出来 ... 有一个满足条件 就退出
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
      res.push(arr[i])
    }
  }
  return res
}
console.log(flatter3(arr));