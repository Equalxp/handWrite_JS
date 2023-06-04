//堆排序
//大顶堆:树的子孩子都比父节点小 从左到右依次排满
//从上到下 从左到右 依次++
//    i的父节点为(i-1)/2
//左子节点i*2+1   右子节点 i*2+2
//维护（大/小）堆的性质 
let arr = [9, 30, 3, 24, 23, 8, 11, 99]
//数组 数组长度 待维护的数组下标
//维护堆
function heapify(arr, length, index) {
  // 父节点
  let max = index
  // 左子节点
  let lson = index * 2 + 1
  // 右子节点
  let rson = index * 2 + 2

  //要保证父节点是j经过维护后是最大的
  if (lson < length && arr[max] < arr[lson]) {
    // 左子节点大于父节点 换下标
    max = lson
  }
  if (rson < length && arr[max] < arr[rson]) {
    // 右子节点大于父节点 换下标
    max = rson
  }
  //max进行了移动
  if (max !== index) {
    //元素互换
    [arr[max], arr[index]] = [arr[index], arr[max]]
    //当前的 父 左子 右子 都维护好了
    //现在问题是 父子节点进行了交互 其余未维护的还要继续维护
    //max已经变成了lson/rson 不在父节点了
    heapify(arr, length, max)
  }
}
function heapSort(arr, n) {
  // n是length
  let i
  //1.建堆
  //堆的第一个元素下标 (n=length-1)-1 /2 (i表示下标)
  //i的父节点是 (i-1)/2
  for (i = parseInt(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i)
  }
  //大顶堆
  //第一个元素和最后一个元素进行交换 然后heapify
  for (i = n - 1; i > 0; i--) {
    //第一个元素(剩余最大的元素)和最后一个元素进行交换
    [arr[i], arr[0]] = [arr[0], arr[i]]
    //i 同时要将剩余元素继续heapify(剩余i个元素) 
    //0 维护的那个堆元素的下标
    heapify(arr, i, 0)
  }
}
length = arr.length
heapSort(arr,length)
//打印排序好的数组
for (const item of arr) {
  console.log(item);
}