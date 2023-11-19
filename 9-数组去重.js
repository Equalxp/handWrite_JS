/**
 * for+for
 */
let array = [9, 30, 3, 9, 30]
function unique1(array) {
  // res用来存储结果
  var res = [];
  let i, j
  // 先加数进res 然后判断res是否有这个数 有就break 没有就加进去
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < res.length; j++) {
      // 原数组一一拿出来和结果数组比较
      if (array[i] === res[j]) {
        break 
      }
    }
    // 判断每次循环的result数组是否全都遍历完
    // 遍历完说明没有重复元素，使用push新增
    if (j === res.length) {
      res.push(array[i])
    }
  }
  return res
}
console.log('1', unique1(array));

/**
 * for + indexOf (返回某字符串第一次出现的位置)
 */
array = [9, 30, 3, 9, 30]
function unique2(array) {
  let res = []
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (res.indexOf(current) === -1) {
      res.push(current)
    }
  }
  return res
}
console.log('2', unique2(array));


/**
 * 排序后去重
 * 只判断当前元素与上一个元素是否相同
 */

array = [9, 30, 3, 9, 30]
function unique3(array) {
  let res = []
  let sortArray = array.sort((a, b) => a - b)
  let seen //上一个元素
  for (let i = 0; i < sortArray.length; i++) {
    // seen属于判断值 seen是i-1对应的值
    if (!i || seen !== sortArray[i]) {
      res.push(sortArray[i])
    }
    seen = sortArray[i]
  }
  return res
}
console.log('3', unique3(array));


/**
 * filter + indexOf
 */

array = [9, 30, 3, 9, 30]
function unique6(array) {
  let res = array.filter(function (item, index) {
    // filter 接收函数 返回的是return为true的数据 
    return array.indexOf(item) === index
    // indexOf(item) 有这个数的话 返回这个数第一次出现的下标位置
  })
  return res
}
console.log('7', unique6(array));

/**
 * ES6 提供了新的数据结构 Set。它类似于数组，
 * 但是成员的值都是唯一的
 */

array = [9, 30, 3, 9, 30]

function unique9(array) {
   return Array.from(new Set(array));
  //  return [...new Set(array)];
}

console.log('10',unique9(array)); // [1, 2, "1"]
