const s = 'aaabbbcccaaabbbaaayyyyyyyyy';
function getMaxStr(s) {
  // console.log(s.split('').sort().join());
  const str = s.split('').sort().join("")
  // 匹配出现的连续的重复字符
  const reg = /(\w)\1+/g
  return [str.match(reg)[0], str.match(reg)[0].length]
}
function getMaxStr1(str) {
  let arr = str.match(/(\w)\1*/g)
  // 返回最长的那个
  let maxL = Math.max.apply(null, arr.map(i => i.length))
  return result = arr.reduce((pre, cur) => {
    if (cur.length == maxL) {
      pre[cur] = maxL
    }
    return pre
  }, {})
}
const res = getMaxStr1(s)
console.log(res);