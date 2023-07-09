
/**
 * 观察者模式:观察者 (Observer)直接订阅 (Subscribe) 主题 (Subject)，
 * 而当主题被激活的时候，会触发(Fire Event) 观察者里的事件。
 */
// 1.Subject 主题
class Subject {
  constructor(name) {
    this.name = name
    this.state = 'sad'
    this.observer = [] // 存放观察者
  }
  // 2.将观察者放到主题的身上
  attach(ther) {
    this.observer.push(ther)
  }
  // 主题状态变化 要让观察者更新观察状态
  setState(state) {
    this.state = state
    // console.log(this);// 就是观察者class
    // 通知观察者 循环取出每个观察者的观察方法
    this.observer.forEach((ther)=>{
      ther.update(this)
    })
  }
}
// 1.观察者
class Observer {
  constructor(name) {
    this.name = name
  }
  // 观察者观察 观察状态
  update(subject) {
    console.log(this.name+":"+subject.name+":"+subject.state);
  }
}
let bb = new Subject('baby')
let father = new Observer('fa')
let mother = new Observer('ma')

bb.attach(father)
bb.attach(mother)

// 状态改变
bb.setState('happy')