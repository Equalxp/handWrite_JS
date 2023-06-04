//快速排序
let arr = [9, 30, 3, 24, 23, 8, 11, 99]
/**
 * 
1、选出一个key,一般是最左边或是最右边的。
2、起始时,prev指针指向序列开头,cur指针指向prev。
3、若cur指向的内容小于key,(若第一位就小于key prev和cur都++后移动一位) ,则prev先向后移动一位
      然后交换prev和cur指针指向的内容,然后cur指针++
  若cur指向的内容大于key，则cur指针直接++。
  如此进行下去，直到cur到达end位置，此时将key和++prev(prev指向了key要放的位置)指针指向的内容交换即可。

经过一次单趟排序，最终也能使得key左边的数据全部都小于key，key右边的数据全部都大于key。
 * @param  arr 数组
 * @param  low 左边界下标
 * @param  high 右边界下标
 */
function qSort(arr, low, high) {
  // 递归边界
  if (low < high) {
    // 返回的这个mid在整个数组的正确位置上了
    let mid = partition(arr, low, high)
    // 左半边划分 0-mid前一个数 mid已经在正确位置
    qSort(arr, low, mid - 1)
    // 右半边划分
    qSort(arr, mid + 1, high)
  }
}
// 函数得出数组mid 
function partition(arr, low, high) {
  //以最后一个数为基准 pivot
  let pivot = arr[high]
  // 0下标
  let i = low
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      // j去找比pivot小的数 j相当于一个指针一直移动 找到之后 i j 元素换位置
      // i++ j++
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
    }
  }
  // 一轮循环走完了 i前面都是比pivot(high)小的数 i就是high位置
  [arr[high], arr[i]] = [arr[i], arr[high]]
  //  // pivot和i元素换位置 pivot元素回到正确的位置
  // 返回i pivot的下标
  return i
}
//入口函数
function quickSort(arr) {
  let length = arr.length
  //递归函数 
  //数组 first下标 last下标
  qSort(arr, 0, length - 1)
}
quickSort(arr)
//打印排序好的数组
for (const item of arr) {
  console.log(item);
}