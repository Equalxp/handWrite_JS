// 希尔排序
/**

 */
let arr = [9, 30, 3, 24, 23, 8, 11, 99]
// 控制增量+插入排序
let length = arr.length
function shellSort(arr, n) {
  let i, j, key, incent
  //初始增量 n/2
  for (incent = parseInt(n / 2); incent > 0; incent = parseInt(incent / 2)) {
    //每一趟插入排序
    for (i = incent; i < n; i++) {
      key = arr[i]
      j = i - incent
      while (j >= 0 && arr[j] > key) {
        arr[j + incent] = arr[j]
        j -= incent
      }
      arr[j + incent] = key
    }
  }
}

shellSort(arr,length)
//打印排序好的数组
for (const item of arr) {
  console.log(item);
}