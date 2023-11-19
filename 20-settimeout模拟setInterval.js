
// timeout模拟实现interval
// interval是间隔一段时间将回调放入任务队列
{
  function _setTimeout(fn, t) {
    let timer = null
    // 先调用传进来的函数 然后隔t秒调用自己
    function interval() {
      fn()
      timer = setTimeout(interval, t)
    }
    // 这样写就是在执行栈里面执行 interval函数 进去执行fn函数 没有进入执行队列
    // interval() 
    // fn()函数不会作为回调函数放入任务队列
    setTimeout(interval, t);

    return {
      cancel: () => {
        clearTimeout(timer)
      }
    }
  }
  // function func() {
  //   console.log('1111');
  // }
  // _setTimeout(func, 1000)
  _setTimeout(() => {
    console.log(111);
  }, 1000)
}


// // interval实现timeout
// {
//   const _setInterval = (fn, time) => {
//     const timer = setInterval(() => {
//       fn()
//       clearInterval(timer)
//     }, time);
//   }

//   _setInterval(() => {
//     console.log(1);
//   }, 1000)
// }