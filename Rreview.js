// 1.数组扁平
{
  // let arr = [1, [2, [3, [4, 5]]], 6];
  // function flatter(arr) {
  //   if (!arr.length) {
  //     return
  //   }
  //   return arr.toString().split(',').map((item) => {
  //     return Number(item)
  //   })
  // }

  // function flatter1(arr) {
  //   // 只要里面有为数组的 就一直扁平
  //   while (arr.some(item => Array.isArray(item))) {
  //     arr = [].concat(...arr)
  //     console.log(arr);
  //   }
  //   return arr
  // }

  // // reduce/concat/递归
  // function flatter2(arr) {
  //   return arr.reduce((pre, cur) => {
  //     return pre.concat(Array.isArray(cur) ? flatter2(cur) : cur)
  //   }, [])
  // }

  // console.log(flatter1(arr));
}
// 2.new
{
  // const _new = function (constructor, ...args) {
  //   // 1.创建一个空对象 
  //   const obj = {}
  //   // 2.原型链
  //   obj.__proto__ = constructor.prototype
  //   // 3.this
  //   const res = constructor.apply(obj, args)
  //   return res instanceof Object ? res : obj
  // }
  // function Person() {
  //   this.a = 1
  //   this.func = () => {
  //     console.log('lxp is sb');
  //   }
  // }
  // const p = _new(Person)
  // console.log(p);
  // p.func()
}
// 3.寄生组合式继承
{
  // function Person(name) {
  //   this.name = name
  //   this.eating = function () {
  //     console.log('吃饭');
  //   }
  // }
  // Person.prototype.fuck = () => {
  //   console.log('fuck life');
  // }
  // function Me(name) {
  //   // 继承父类的属性
  //   Person.call(this, name)
  // }

  // // 继承之后 子类的实例 __proto__ 可以访问到父类的原型对象
  // function inherit(sub, sup) {
  //   // let obj = Object.create(sup.prototype)
  //   // sub.prototype = obj
  //   let obj = {}
  //   obj.__proto__ = sup.prototype
  //   sub.prototype = obj
  //   Object.defineProperty(sub.prototype, 'constructor', {
  //     enumerable: false,
  //     configurable: false,
  //     writable: false,
  //     value: sub
  //   })
  //   // sub.prototype.constructor = sub
  // }
  // inherit(Me, Person)

  // let me = new Me('lxxp')
  // console.log(me.name);
  // me.eating()
  // me.fuck()
}
// 4.instanceof 构造函数的prototype有没有出现在实例的原型链上
{
  // function _instanceOf(L, R) {
  //   const baseType = ['string', 'number', 'boolean', 'undefined', 'symbol']
  //   // typeof 检测出来是这种就false
  //   if (baseType.includes(typeof L)) {
  //     return false
  //   }
  //   // proto = L.__proto__
  //   let proto = Object.getPrototypeOf(L)
  //   while (true) {
  //     if (proto == null) {
  //       return
  //     }
  //     if (proto == R.prototype) {
  //       return true
  //     }
  //     proto = Object.getPrototypeOf(proto)
  //   }
  // }
  // function Person() { }
  // const obj = new Person()

  // // 构造函数的prototype是否在实例的原型链上
  // // 实例 instanceOf 构造函数
  // // console.log(obj instanceof Person)
  // console.log(_instanceOf(obj, Person)); //true
}
// 5.create 
{
  // Object.prototype._create = function (proto) {
  //   if (typeof proto !== 'object' || proto == null) {
  //     return null
  //   }
  //   // 1.temp 函数
  //   function fn() { }
  //   // 2.原型关系
  //   fn.prototype = proto
  //   // 3.返回new出来的temp函数
  //   return new fn()
  //   // x.__proto__ = proto
  // }

  // var x = Object._create({
  //   name: 'lxxp'
  // })

  // console.log(x.__proto__);
}
// 6.is
{
  // Object.prototype._is = function (x, y) {
  //   // is和===
  //   if (x === y) {
  //     // +0 === -0 但是在is里面是false
  //     // 运行到1 / x === 1 / y时候 x和y就都是0了 
  //     return x !== 0 || y !== 0 || 1 / x === 1 / y
  //   } else {
  //     return x !== x && y !== y
  //   }
  // }
  // console.log(Object._is(NaN, NaN));
  // console.log(Object._is(+0, -0));
  // console.log(+0 === -0);
}
// 7.简单深拷贝
{
  // function isObject(value) {
  //   const valueType = typeof value
  //   return (value !== null) && (valueType == 'object' || value == 'function')
  // }
  // const _sampleDeepClone = (target) => {
  //   if (!isObject(target)) {
  //     return target
  //   } else {
  //     const cloneTarget = Array.isArray(target) ? {} : []
  //     for (prop in target) {
  //       if (target.hasOwnProperty(prop)) {
  //         cloneTarget[prop] = _sampleDeepClone(target[prop])
  //       }
  //     }
  //     return cloneTarget
  //   }
  // }

  // const person = {
  //   name: 'lxxp',
  //   age: 18,
  //   gf: {
  //     name: 'hyy',
  //     bf: {
  //       name: 'LXP',
  //       hobby: ['kiss', 'basketball']
  //     }
  //   }
  // }
  // const res = _sampleDeepClone(person)
  // console.log(res);

  // res.gf.name = 'hyyy'
  // console.log(res);
  // console.log(person);
}
// 8.深拷贝
{
  // function isObject(value) {
  //   const valueType = typeof value
  //   return (value !== null) && (valueType == 'object' || valueType == 'function')
  // }

  // function _completeDeepClone(target, map = new WeakMap()) {
  //   if (!isObject(target)) {
  //     return target
  //   }
  //   if (typeof target === 'symbol') {
  //     // symbol里面有description 新建一个symbol
  //     return Symbol(target.description)
  //   }
  //   //  下方调用_completeDeepClone的时候 又会创建新对象 判断原来是否有
  //   if (map.get(target)) {
  //     return map.get(target)
  //   }
  //   const cloneTarget = Array.isArray(target) ? {} : []
  //   // 把拷贝对象提前保存到这里面
  //   map.set(target, cloneTarget)
  //   for (prop in target) {
  //     if (target.hasOwnProperty(prop)) {
  //       cloneTarget[prop] = _completeDeepClone(target[prop], map)
  //     }
  //   }
  //   // symbol为key的方法
  //   const symbolKeys = Object.getOwnPropertySymbols(target)
  //   for (const symbolKey of symbolKeys) {
  //     // 左边新创建symbol
  //     cloneTarget[Symbol(symbolKey.description)] = _completeDeepClone(target[symbolKey])
  //   }
  //   // set为value
  //   if (target instanceof Set) {
  //     const newSet = new Set()
  //     for (const item of target) {
  //       newSet.add(_completeDeepClone(item))
  //     }
  //     return newSet
  //   }
  //   return cloneTarget
  // }

  // const s1 = Symbol('s1')
  // const s2 = Symbol('s2')
  // const set = new Set(['lxxp', 'hyyy'])
  // const person = {
  //   name: 'lxxp',
  //   age: 18,
  //   gf: {
  //     name: 'hyy',
  //     bf: {
  //       name: 'LXP',
  //       hobby: ['kiss', 'basketball']
  //     }
  //   },
  //   // 1.value是symbol的
  //   symbolKey: Symbol('value是symbol'),
  //   // 2.key是symbol的
  //   [s1]: 'aaa',
  //   [s2]: 'bbb',
  //   // 3.value是set的
  //   setKey: set
  // }
  // // 4.循环引用
  // person.self = person
  // const res = _completeDeepClone(person)
  // console.log(res);
}
// 9.call
{
  // function person(a, b, c) {
  //   console.log(this.name);
  //   console.log(a, b, c);
  //   return a
  // }
  // let cityboy = {
  //   name: '长谷川',
  // }
  // // 让调用call方法的函数的 this 指向call里的参数
  // Function.prototype.newCall = function (obj) {
  //   if (obj === null || obj === undefined) {
  //     obj = globalThis
  //   }
  //   // this就是调用newCall的函数
  //   obj.temp = this
  //   let result
  //   // 收集参数
  //   let newArgs = []
  //   for (let i = 1; i < arguments.length; i++) {
  //     newArgs.push(arguments[i])
  //   }
  //   result = obj.temp(...newArgs)
  //   delete obj.temp
  //   return result
  // }
  // let res = person.newCall(cityboy, 'beams', 'nautica', 'converse')
  // console.log(res);
}
// 10.apply
{
  // function person(a, b, c) {
  //   console.log(this.name);
  //   console.log(a, b, c);
  //   return a
  // }
  // let cityboy = {
  //   name: '长谷川',
  // }
  // Function.prototype.apply = function (obj, arr) {
  //   if (obj === null || obj === undefined) {
  //     obj = globalThis
  //   }
  //   obj.temp = this
  //   if (!arr) {
  //     obj.temp()
  //   } else {
  //     let newArgs = []
  //     // 拿到参数数组
  //     for (let i = 0; i < arr.length; i++) {
  //       newArgs.push(arr[i])
  //     }
  //     // 一个一个参数丢进去执行
  //     result = obj.p(...newArgs)
  //   }
  //   delete obj.p
  //   return result
  // }
  // let res = person.newApply(cityboy, ['beams', 'nautica', 'converse'])
  // console.log('return返回结果:', res);
}
// 11.bind
{

}
// 12.迭代器对象
{
  // const infos = {
  //   name: 'lxxp',
  //   age: 20,
  //   hobby: 'none',
  //   // 1.
  //   [Symbol.iterator]() {
  //     let index = 0
  //     let entries = Object.entries(this)
  //     // 2.
  //     return infoIterator = {
  //       // 3.
  //       next: () => {
  //         if (index < entries.length) {
  //           return {
  //             done: false,
  //             value: entries[index++]
  //           }
  //         } else {
  //           return {
  //             done: true
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // const iterator = infos[Symbol.iterator]()
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());

  // for (const iterator of infos) {
  //   console.log(iterator);
  // }
}
// 13.冒泡排序
{
  // let arr = [9, 30, 3, 24, 23, 8, 11, 99]
  // function bubbleSort(arr) {
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     for (let j = 0; j < arr.length - i - 1; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
  //       }
  //     }
  //   }
  //   return arr
  // }
  // console.log(bubbleSort(arr));

}
// 14.选择排序
{
  // let arr = [9, 30, 3, 24, 23, 8, 11, 99]
  // function selectSort(arr) {
  //   let length = arr.length
  //   let minIndex
  //   for (let i = 0; i < length - 1; i++) {
  //     minIndex = i
  //     for (let j = i + 1; j < length; j++) {
  //       if (arr[j] < arr[minIndex]) {
  //         minIndex = j
  //       }
  //     }
  //     if (minIndex !== i) {
  //       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  //     }
  //   }
  //   return arr
  // }
  // console.log(selectSort(arr));
}
// 15.插入排序
{
  // let arr = [9, 30, 3, 24, 23, 8, 11, 99]
  // function insertSort(arr) {
  //   for (let i = 1; i < arr.length; i++) {
  //     let key = arr[i]
  //     let j = i - 1
  //     while (j >= 0 && arr[j] > key) {
  //       arr[j + 1] = arr[j]
  //       j--
  //     }
  //     arr[j + 1] = key
  //   }
  //   return arr
  // }
  // console.log(insertSort(arr));
}
// 16.快速排序
{
  // let arr = [99, 9, 3, 24, 23, 8, 11, 30]
  // function qSort(arr, low, high) {
  //   if (low < high) {
  //     let mid = partition(arr, low, high)
  //     qSort(arr, low, mid - 1)
  //     qSort(arr, mid + 1, high)
  //   }
  // }
  // function partition(arr, low, high) {
  //   let pivot = high
  //   let i = low
  //   for (let j = low; j < high; j++) {
  //     if (arr[j] < arr[pivot]) {
  //       [arr[i], arr[j]] = [arr[j], arr[i]]
  //       i++
  //     }
  //   }
  //   [arr[high], arr[i]] = [arr[i], arr[high]]
  //   return i
  // }
  // function quickSort(arr) {
  //   qSort(arr, 0, arr.length - 1)
  //   return arr
  // }
  // console.log(quickSort(arr));
}
// 17.shell排序
{
  // let arr = [9, 30, 3, 24, 23, 8, 11, 99]
  // function shellSort(arr, n) {
  //   // 控制增量
  //   for (let incent = parseInt((n / 2)); incent > 0; incent = parseInt(incent / 2)) {
  //     // 插入排序
  //     for (let i = incent; i < arr.length; i++) {
  //       let key = arr[i]
  //       let j = i - incent
  //       while (j >= 0 && arr[j] > key) {
  //         arr[j + incent] = arr[j]
  //         j -= incent
  //       }
  //       arr[j + incent] = key
  //     }
  //   }
  //   return arr
  // }
  // console.log(shellSort(arr, arr.length));
}
// 18.堆排序
{
  // let arr = [9, 30, 3, 24, 23, 8, 11, 99]
  // function heapify(arr, length, index) {
  //   // 维护堆
  //   let max = index
  //   let lson = index * 2 + 1
  //   let rson = index * 2 + 2
  //   while (rson < length && arr[rson] > arr[max]) {
  //     max = rson
  //   }
  //   while (lson < length && arr[lson] > arr[max]) {
  //     max = lson
  //   }
  //   if (max !== index) {
  //     [arr[max], arr[index]] = [arr[index], arr[max]]
  //     heapify(arr, length, max)
  //   }
  // }
  // function heapSort(arr, n) {
  //   // 建立堆
  //   for (let i = parseInt(n / 2) - 1; i >= 0; i--) {
  //     heapify(arr, n, i)
  //   }
  //   // 第一个和最后一个交换顺序
  //   for (i = n - 1; i > 0; i--) {
  //     [arr[i], arr[0]] = [arr[0], arr[i]]
  //     heapify(arr, i, 0)
  //   }
  //   return arr
  // }
  // console.log(heapSort(arr, arr.length));
}
// 19.归并排序
{
  // let arr = [9, 30, 3, 24, 23, 8, 11, 99]
  // //划分+合并
  // function mergeSort(arr, n) {
  //   let tempArr = []
  //   msort(arr, tempArr, 0, n - 1)
  // }
  // function msort(arr, tempArr, left, right) {
  //   // 递归划分
  //   if (left < right) {
  //     let mid = parseInt((left + right) / 2)
  //     msort(arr, tempArr, left, mid)
  //     msort(arr, tempArr, mid + 1, right)
  //     merge(arr, tempArr, left, mid, right)
  //   }
  // }
  // // 合并 左右两个数组进行 比较没有排序的值 然后插入
  // function merge(arr, tempArr, left, mid, right) {
  //   let l_pos = left
  //   let r_pos = mid + 1
  //   let pos = left

  //   while (l_pos <= mid && r_pos <= right) {
  //     if (arr[l_pos] < arr[r_pos]) {
  //       tempArr[pos++] = arr[l_pos++]
  //     } else {
  //       tempArr[pos++] = arr[r_pos++]
  //     }
  //   }
  //   // 剩余的全部的一股脑加进去
  //   while (l_pos <= mid) {
  //     tempArr[pos++] = arr[l_pos++]
  //   }
  //   while (r_pos <= right) {
  //     tempArr[pos++] = arr[r_pos++]
  //   }
  //   while (left <= right) {
  //     arr[left] = tempArr[left]
  //     left++
  //   }
  // }
  // mergeSort(arr, arr.length)
  // console.log(arr);
}
// 20.数组去重
{
  // let array = [9, 30, 3, 9, 30]
  // // for+for
  // function unique1(arr) {
  //   let res = []
  //   let j, i
  //   for (i = 0; i < arr.length; i++) {
  //     for (j = 0; j < res.length; j++) {
  //       if (arr[i] === res[j]) {
  //         // 有一样的数就break
  //         break
  //       }
  //     }
  //     if (j === res.length) {
  //       res.push(arr[i])
  //     }
  //   }
  //   return res
  // }
  // function unique2(arr) {
  //   return Array.from(new Set(array))
  // }
  // // indexOf
  // function unique3(arr) {
  //   let res = []
  //   for (let i = 0; i < array.length; i++) {
  //     const current = arr[i]
  //     if (res.indexOf(current) === -1) {
  //       res.push(current)
  //     }
  //   }
  //   return res
  // }
  // function unique4(arr) {
  //   // filter有index参数
  //   let res = arr.filter((item, index) => {
  //     // 过滤拿到返回值为true的值
  //     // 只要第一次出现的地方
  //     return arr.indexOf(item) === index
  //   })
  //   return res
  // }
  // const res = unique4(array)
  // console.log(res);
}
// 21.事件总线/发布订阅
{
  // class eventEmitter {
  //   constructor() {
  //     this.eventMap = {}
  //   }
  //   // 实现订阅
  //   on(evenName, eventFn) {
  //     let eventFns = this.eventMap[evenName]
  //     if (!eventFns) {
  //       eventFns = []
  //       this.eventMap[evenName] = eventFns
  //     }
  //     eventFns.push(eventFn)
  //   }
  //   // 取消订阅
  //   off(evenName, eventFn) {
  //     if (!this.eventMap[evenName]) {
  //       return
  //     }
  //     this.eventMap[evenName] = this.eventMap[evenName].filter((item) => {
  //       // 返回的都是 不等于eventFn的函数
  //       return item !== eventFn
  //     })
  //     console.log(this.eventMap[evenName]);
  //   }
  //   // 只执行一次
  //   once(evenName, eventFn) {
  //     // 要执行也要删除
  //     function fn() {
  //       eventFn()
  //       this.off(evenName, fn)
  //     }
  //     this.on(evenName, fn)
  //   }
  //   // 触发订阅 执行里面的函数
  //   emit(evenName, ...args) {
  //     // 取出里面的函数
  //     let eventFns = this.eventMap[evenName]
  //     if (!eventFns) return
  //     eventFns.forEach(fn => {
  //       fn.apply(this, args)
  //     });
  //   }
  // }
  // const eventBus = new eventEmitter()
  // eventBus.on("navclick", function fn() {
  //   console.log('111');
  // })
  // eventBus.emit("navclick")
  // eventBus.off("navclick", function fn() {
  //   console.log('111');
  // })
  // eventBus.emit("navclick")
  // console.log(eventBus.eventMap);
}
// 22.定时器的模拟
{
  // // timeout模拟interval
  // function _setInterval(fn, t) {
  //   let timer = null
  //   function interval() {
  //     fn()
  //     timer = setTimeout(interval, t)
  //   }
  //   interval()
  // }
  // _setInterval(() => {
  //   console.log(111)
  // }, 1000)

  // // interval模拟timeout
  // function _setTimeout(fn, t) {
  //   const timer = setInterval(() => {
  //     fn()
  //     clearInterval(timer)
  //   }, t);
  // }
  // _setTimeout(() => {
  //   console.log(99);
  // }, 1000)
}
// 23.compose
{
  // function fn1(x) {
  //   return x + 1;
  // }
  // function fn2(x) {
  //   return x + 2;
  // }
  // function fn3(x) {
  //   return x + 3;
  // }
  // function fn4(x) {
  //   return x + 4;
  // }
  // console.log(fn1(fn2(fn3(fn4(1)))));
  // const fn = compose(fn1, fn2, fn3, fn4)
  // console.log(fn(1));
  // function compose(...fn) {
  //   //1.参数是函数
  //   //2.从右到左执行函数
  //   if (!fn.length) return
  //   if (fn.length === 1) return fn[0]
  //   return fn.reduce((pre, cur) => {
  //     // 参数args => 去执行 第一个函数(第二个函数(...))
  //     return (...args) => pre(cur(...args))
  //   })
  // }
}
// 24.模版字符串
{
  // let _template = '我是￥{name},年龄￥{age}'
  // let data = {
  //   // 对象里的属性名是字符串形式的
  //   name: 'lxxp',
  //   age: 20
  // }
  // function render(template, data) {
  //   // 取出来 匹配 替换
  //   let reg = /\￥\{(\w+)\}/
  //   if (reg.test(template)) {
  //     const keys = template.match(reg)[1]
  //     console.log(keys);
  //     template = template.replace(reg, data[keys])
  //     // 然后递归调用
  //     return render(template, data)
  //   }
  //   return template
  // }
  // let res = render(_template, data)
  // console.log(res);
}
// 25.flatten
{
  // function _flatten1(obj) {
  //   // 类型判断 基础/数组/对象
  //   let result = {}
  //   let process = (key, value) => {
  //     if (Object(value) !== value) {
  //       if (key) {
  //         result[key] = value
  //       }
  //     } else if (Array.isArray(value)) {
  //       for (let i = 0; i < value.length; i++) {
  //         process(`${key}[${i}]`, value[i])
  //       }
  //       if (value.length === 0) {
  //         result[key] = []
  //       }
  //     } else {
  //       let objArr = Object.keys(value)
  //       objArr.forEach((item) => {
  //         process(key ? `${key}.${item}` : `${item}`, value[item])
  //       })
  //       if (objArr.length === 0 && key) {
  //         result[key] = {};
  //       }
  //     }
  //   }
  //   process('', obj)
  //   return result
  // }
  // console.log(_flatten1(obj));
}
// 26.观察者模式
{
  // class Subject {
  //   constructor(name) {
  //     this.name = name
  //     this.state = 'sad'
  //     this.observer = []
  //   }
  //   // 把观察者放到自己身上
  //   attach(ther) {
  //     this.observer.push(ther)
  //   }
  //   // 主题被激活改变状态
  //   setState(state) {
  //     this.state = state
  //     this.observer.forEach((ther) => {
  //       // 调用观察者里的函数 把主题也传过去
  //       ther.update(this)
  //     })
  //   }
  // }
  // class Observer {
  //   constructor(name) {
  //     this.name = name
  //   }
  //   update(subject) {
  //     console.log(this.name + ":" + subject.name + ":" + subject.state);
  //   }
  // }
  // let bb = new Subject('baby')
  // let father = new Observer('fa')
  // let mother = new Observer('ma')

  // bb.attach(father)
  // bb.attach(mother)

  // // 状态改变
  // bb.setState('happy')
}
// 27.函数柯里化
{

}
// 28.loadsh.get
{
  // function _get(source, path, defaultValue = undefined) {
  //   let paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
  //   let result = source
  //   for (const p of paths) {
  //     result = Object(result)[p]
  //     if (result == undefined) {
  //       return defaultValue
  //     }
  //   }
  //   return result
  // }
  // const d = _get({ a: [{ b: 1 }] }, 'a[0].b', 3)
  // console.log(d);
}
// 29. 二分查找
{
  // let arr = [1, 3, 5, 6, 7, 9, 12, 15, 19]
  // function binarySearch(target, arr) {
  //   let begin = 0
  //   let end = arr.length
  //   let mid
  //   while (begin < end) {
  //     mid = Math.floor((begin + end) / 2)
  //     if (arr[mid] == target) {
  //       return mid
  //     } else if (arr[mid] < target) {
  //       begin = mid + 1
  //     } else if (arr[mid] > target) {
  //       end = mid - 1
  //     }
  //   }
  //   return -1
  // }
  // console.log(binarySearch(9, arr));
}