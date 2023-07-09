
// timeout模拟实现interval

{
  // function _setTimeout(fn, t) {
  //   let timer = null
  //   // 先调用传进来的函数 然后隔t秒调用自己
  //   function interval() {
  //     fn()
  //     timer = setTimeout(interval, t)
  //   }
  //   interval()
  //   return {
  //     cancel: () => {
  //       clearTimeout(timer)
  //     }
  //   }
  // }
  // let a = _setTimeout(() => {
  //   console.log(111);
  // }, 1000)
  // let b = _setTimeout(() => {
  //   console.log(222);
  // }, 1000)
  // a.cancel()
}


// interval实现timeout
{
  const _setInterval = (fn, time) => {
    const timer = setInterval(() => {
      fn()
      clearInterval(timer)
    }, time);
  }

  _setInterval(() => {
    console.log(1);
  }, 1000)

}