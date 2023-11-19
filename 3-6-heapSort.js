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

  //要保证父节点是经过维护后是最大的
  if (lson < length && arr[max] < arr[lson]) {
    // 左子节点大于父节点 换下标
    max = lson
  }
  if (rson < length && arr[max] < arr[rson]) {
    // 右子节点大于父节点 换下标
    max = rson
  }
  //max进行了移动 改变了值
  if (max !== index) {
    //元素互换
    [arr[max], arr[index]] = [arr[index], arr[max]]
    //当前的 父 左子 右子 都维护好了
    //子节点进行了交互 可能交换后的堆max还需要维护
    //max到以前的lson/rson节点上了 不在父节点了! 而现在lson/rson是换完之后的
    heapify(arr, length, max)
  }
}
function heapSort(arr, n) {
  // n是length
  let i
  //1.建堆
  //堆的第一个元素下标 (n=length-1)-1 /2 (i表示下标) 整个堆的父节点开始 然后-- 一直heapify
  //整个堆的父节点 用i表示(i-1)/2 节点i的父节点是(i-1)/2
  for (i = parseInt(n / 2) - 1; i >= 0; i--) {
    // 对每个元素heapify
    heapify(arr, n, i)
  }
  //大顶堆开始排序
  //第一个元素和最后一个元素进行交换 然后heapify
  for (i = n - 1; i > 0; i--) {
    //第一个元素(剩余最大的元素)和最后一个元素进行交换
    [arr[i], arr[0]] = [arr[0], arr[i]]
    //i 同时要将剩余元素继续heapify(剩余i个元素) length
    //0 维护的那个堆元素的下标 因为经过交换了 0那个位置需要再次heapify
    heapify(arr, i, 0)
  }
}
length = arr.length
heapSort(arr, length)
//打印排序好的数组
for (const item of arr) {
  console.log(item);
}