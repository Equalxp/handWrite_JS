{

  /**
   * Object.is不会转换被比较的两个值的类型，这点和===更为相似，他们之间也存在一些区别。
   * 1. NaN在===中是不相等的，而在Object.is中是相等的
   * 2. +0和-0在===中是相等的，而在Object.is中是不相等的
   */

  Object.prototype._is = function (x, y) {
    if (x === y) {
      // 只有一种情况和===不一样 +0 -0
      // x !== 0，则返回true
      // 如果 x === 0，则需要判断+0和-0
      // 则可以直接使用 1/+0 === Infinity 和 1/-0 === -Infinity来进行判断
      return x !== 0 || 1 / x === 1 / y
    }
    // x !== y 判断是否为 NaN x !== x就是NaN
    // xy都是NaN就返回true
    return x !== x && y !== y
  }

  console.log(Object._is(NaN, NaN));
  console.log(Object._is(+0, -0));
}
