//归并排序
let arr = [9, 30, 3, 24, 23, 8, 11, 99]
//划分+合并
function mergeSort(arr, n) {
  //一个辅助数组
  let tempArr = []
  //排序 原数据 临时数组 左下标 右下标
  msort(arr, tempArr, 0, n - 1)
}
//划分(递归)
function msort(arr, tempArr, left, right) {
  //只有一个元素的时候 不用划分
  if (left < right) {
    let mid = parseInt((left + right) / 2)
    //递归划分左半区域
    msort(arr, tempArr, left, mid)
    //递归划分右半去区域
    msort(arr, tempArr, mid + 1, right)
    //合并
    merge(arr, tempArr, left, mid, right)
  }
}

// 合并函数
function merge(arr, tempArr, left, mid, right) {
  // 左半区第一个未排序的元素
  let l_pos = left
  // 右半区第一个未排序的元素
  let r_pos = mid + 1
  // 临时数组的元素的下标 临时数组用于存放已经排序的数
  let pos = left

  //合并
  //左半区有元素 右半区也有元素
  while (l_pos <= mid && r_pos <= right) {
    if (arr[l_pos] < arr[r_pos]) {
      //左半区第一个比右半区第一个元素更小
      tempArr[pos++] = arr[l_pos++]
      //将较小的元素放入临时数组 并且++后移
    } else {
      //右半区第一个剩余元素更小
      tempArr[pos++] = arr[r_pos++]
    }
  }
  //合并左半区剩余的元素
  while (l_pos <= mid) {
    //左半区的直接丢到tempArr里面
    tempArr[pos++] = arr[l_pos++]
  }
  //合并右半区剩余的元素
  while (r_pos <= right) {
    tempArr[pos++] = arr[r_pos++]
  }
  //临时数组的中合并后的元素复制回原来的数组
  //right是数组最后一个元素
  while (left <= right) {
    arr[left] = tempArr[left]
    left++
  }
}
length = arr.length
mergeSort(arr, length)
//打印排序好的数组
for (const item of arr) {
  console.log(item);
}