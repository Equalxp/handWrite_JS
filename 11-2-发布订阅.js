/**
 * 发布订阅模式:订阅者 (Subscriber) 把自己想订阅的事件注册 (Subscribe)到
 * 调度中心(Topic)，当发布者(Publisher)发布该事件 (Publish topic) 
 * 到调度中心，也就是该事件触发时，
 * 由调度中心统一调度 (FireEvent)订阅者注册到调度中心的处理代码
 */

// on订阅 emit发布 once off

class eventEmitter {
  constructor() {
    //{ 'navclick':[eventFn1,eventFn2...] } 一个订阅事件 对应不同的回调
    this.eventMap = {}
  }
  // 实现订阅
  on(evenName, eventFn) {
    // 取出订阅这个事件名的回调们
    let eventFns = this.eventMap[evenName]
    if (!eventFns) { // 空
      eventFns = []
      this.eventMap[evenName] = eventFns
    }
    eventFns.push(eventFn)
  }
  // 删除订阅
  off(evenName, eventFn) {
    if (!this.eventMap[evenName]) return
    this.eventMap[evenName] = this.eventMap[evenName].filter((item) => {
      return item !== eventFn // 取出map中name对应的Fn们 filter 要取消订阅的Fn 
    })
  }
  // 只执行一次订阅
  once(evenName, eventFn) {
    function fn() {
      eventFn() // 执行一次了
      this.off(evenName, fn) // 取消订阅了
    }
    // 1.先订阅这个事件 回调自己写
    this.on(evenName, fn)
  }
  // 触发订阅
  emit(evenName, ...args) {
    let eventFns = this.eventMap[evenName]
    if (!eventFns) return
    eventFns.forEach(fn => {
      // fn(...args) //执行函数
      fn.apply(this, args)
    });
  }
}

const eventBus = new eventEmitter()

// const handle = (...rest) => {
//   console.log(rest);
// };

// 1.监听触发navclick事件 并且绑定回调函数
eventBus.on("navclick", () => {
  console.log('111');
})
eventBus.on("navclick", () => {
  console.log('333');
})
eventBus.on("navclick", () => {
  console.log('444');
})

eventBus.emit("navclick")
// eventBus.emit("navclick",'lxp')
