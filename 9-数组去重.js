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
    // j和上次的值一样说明没有 === / 如果加了那就不push进去
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
    if (res.indexOf(array[i]) === -1) {
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
 * @param array：表示要去重的数组，必填
 * 
 * @param isSorted：表示函数传入的数组是否已排过序，
 * 如果为 true，将会采用更快的方法进行去重
 * 
 * @param iteratee：传入一个函数，可以对每个元素进行重新的计算，
 * 然后根据处理的结果进行去重
 * 
 * unique 的工具函数 第二版本
 * 字母的大小写视为一致，比如'a'和'A'
 */
let array2 = [9, 30, 3, 9, 30, 'a', 'A']
function unique5(array, isSorted, iteratee) {
  let res = []
  let seen = []
  for (let i = 0; i < array2.length; i++) {
    const value = array2[i];
    let computed = iteratee ? iteratee(value, i, array) : value
    if (isSorted) {
      if (!i || seen !== value) {
        res.push(value)
      }
    } else if (iteratee) {
      if (seen.indexOf(computed) === -1) {
        seen.push(computed)
        res.push(value)
      }
    } else if (res.indexOf(value) === -1) {
      res.push(value)
    }
  }
  return res
}
console.log('6', unique5(array2, false, function (item) {
  return typeof item == 'string' ? item.toLowerCase() : item
})); // [1, "a", 2]



/**
 * filter 方法
 */

array = [9, 30, 3, 9, 30]
function unique6(array) {
  let res = array.filter(function (item, index, array) {
    // filter 接收函数 返回的是return为true的数据
    return array.indexOf(item) === index
    // indexOf(item) 有这个数的话 就返回数组index下标
  })
  return res
}
console.log('7', unique6(array));

/**
 * 
 * 利用一个空的 Object 对象
 * 我们把数组的值存成 Object 的 key 值，比如 Object[value1] = true，
 * 在判断另一个值的时候，如果 Object[value2]存在的话，就说明该值是重复的。
 */

array = [9, 30, 3, 9, 30]
function unique8(array) {
  let obj = {}
  return array.filter(function(item,index,array){
    return obj.hasOwnProperty(item) ? false : (obj[item] = true)
  })
}

console.log('9', unique8(array));

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
