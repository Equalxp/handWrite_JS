//选择排序
/**
每次从待排序列中选出一个最小值，然后放在序列的起始位置，直到全部待排数据排完即可。
实际上，我们可以一趟选出两个值，一个最大值一个最小值
然后将其放在序列开头和末尾，这样可以使选择排序的效率快一倍。

 */
let arr = [9, 30, 3, 24, 23, 8, 11, 99]
// 0 - 7
// 共8位
//在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
function selectSort(arr) {
  let length = arr.length
  // 1.最小数的下标
  let minIndex
  for (let i = 0; i < length - 1; i++) {
    minIndex = i
    //第一轮让最小的去最前面
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
        // 对下标的操作 让minIndex指向最小数的下标
      }
    }
    if (minIndex !== i) {
      //换位置 让未排序的最小数从i=0开始排序
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
}
selectSort(arr)
//打印排序好的数组
for (const item of arr) {
  console.log(item);
}