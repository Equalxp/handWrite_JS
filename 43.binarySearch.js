// 二分查找
// 1.边界情况
{
  let arr = [1, 3, 5, 6, 7, 9, 12, 15, 19]
  function binarySearch(target, arr) {
    let begin = 0
    // 这里-1
    let end = arr.length - 1
    let mid
    while (begin <= end) {
      // 避免加法溢出
      // let mid = begin + (end - begin) / 2
      mid = Math.floor((begin + end) / 2)
      if (arr[mid] == target) {
        return mid
      } else if (arr[mid] > target) {
        end = mid - 1
      } else if (arr[mid] < target) {
        begin = mid + 1
      }
    }
    return -1
  }
  console.log(binarySearch(9, arr));

}
// 2.重复值处理
{
  // let arr = [7, 7, 8, 8, 9, 19]
  // function binarySearch(target, arr) {
  //   let left = 0
  //   let mid
  //   let right = arr.length
  //   // 找左边界 最左边的那个要找的值
  //   while (left < right) {
  //     mid = Math.floor(left + (right - left) / 2)
  //     // mid = (left + right) >>> 1;
  //     if (arr[mid] > target) {
  //       right = mid - 1
  //     } else if (arr[mid] < target) {
  //       left = mid + 1
  //     } else if (arr[mid] == target) {
  //       // 收紧右边界锁定左边界
  //       // right = mid - 1

  //       // 收紧左边界 
  //       left = mid + 1
  //       // 先排除这个相等的第一个mid 使用是left+1 一直往左边逼近
  //     }
  //   }
  //   return left
  // }
  // console.log(binarySearch(8, arr));
}
