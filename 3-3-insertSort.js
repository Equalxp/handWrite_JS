//插入排序
/**
1.从第一个元素开始，该元素可以认为已经被排序
2.取下一个元素item，从已排序的元素序列从后往前扫描
3.如果该元素大于item，则将该元素移到下一位
4.重复步骤3，直到找到已排序元素中小于等于tem的元素
5.tem插入到该元素的后面，如果已排序所有元素都大于tem，则将tem插入到下标为0的位置
 */
let arr = [9, 30, 3, 24, 23, 8, 11, 99]
// 从第二个数开始往前比 比它大就往后排
// 以此类推进行到最后一个数
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    //储存当前数
    const temp = arr[i];
    let j = i - 1
    // 前数大于后数
    while (j >= 0 && arr[j] > temp) {
      // arr[j]后移动一位
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
}

insertSort(arr)
//打印排序好的数组
for (const item of arr) {
  console.log(item);
}