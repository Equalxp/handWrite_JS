const num1 = 1234.11
const num2 = 12414123.1231
const num3 = 12

function paddingNum(num) {
  let [integer, point] = num.toString().split(".")
  let res
  // 后置断言 匹配(\d{3})的后面也得是\d
  let reg = /(\d{3})(?=\d)/g
  // 反转形成字符串
  console.log(integer.split("").reverse().join(""));
  let newStr = integer.split("").reverse().join("").replace(reg, (match, $1) => {
    return match + ","
  })
  newStr = newStr.split("").reverse().join("")
  point ? res = newStr + "." + point : res = newStr
  return res
}

console.log(paddingNum(num1))
// console.log(paddingNum(num2))
// console.log(paddingNum(num3))