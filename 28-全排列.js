
/**
 * abc的全排列等于
 * ('a'拼接上'bc'的全排列数组中的每一项)
 * ('b'拼接上'ac'的全排列数组的每一项)
 * ('c'拼接上'ab'的全排列数组的每一项)
 * 就是传入的string字符 每一个字符+剩余字符的全排列
 */
const _permute = string => {
  if (string.length === 1) {
    return [string]
  }
  const result = []
  for (let str of string) {
    // 得到剩余的字符组成数组
    const arr = string.split('').filter(s => {
      return str !== s
    })
    console.log(arr);
    // 递归剩余的数组 再得到剩余数组
    // 将当前
    _permute(arr.join('')).forEach(item => {
      // 每一个字符拼接上 剩余字符串的全排列
      result.push(str + item)
    })
  }
  return result
}

console.log(_permute('abc'));