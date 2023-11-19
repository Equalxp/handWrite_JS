
Array.prototype._reduce = function (fn, pre) {
  for (let i = 0; i < this.length; i++) {
    if (pre === undefined) {
      // 如果没有传pre 就以第一次的结果为pre
      // prev cur index array 四个参数
      pre = fn(this[i], this[i + 1], i + 1, this)
      i++
    } else {
      pre = fn(pre, this[i], i, this)
    }
  }
  return pre
}

const arr = [1, 2, 34, 45, 213, 11]
const res = arr._reduce((pre,cur)=>{
  return pre+cur
},0)
console.log(res);
