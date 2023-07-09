//1.冒泡排序
/**
 * 左边大于右边交换一趟排下来最大的在右边
 * 将选中的数(从第一个到最后一个) 从依次和相邻的比较
 */
let i //排序的趟数
let j //每趟排序元素的位置
let arr = [9, 30, 3, 24, 23, 8, 11, 99]
// 外层for交换多少轮
for (let i = 0; i < arr.length - 1; i++) {
  // 第一趟将最大的放到最后 内层for完成重复比较+交换
  for (let j = 0; j < arr.length - i - 1; j++) {
    // 前一个数大于后一个数
    if (arr[j] > arr[j + 1]) {
      // es6
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }
}
//打印排序好的数组
for (const item of arr) {
  console.log(item);
}
