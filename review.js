// 冒泡排序
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
// 选择
{
  // let arr = [9, 30, 3, 24, 23, 8, 11, 99]
  // function selectSort(arr) {
  //   let minIndex
  //   for (let i = 0; i < arr.length; i++) {
  //     minIndex = i
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[minIndex] > arr[j]) {
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
// 插入
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
// 快速排序
{
  // let arr = [99, 9, 3, 24, 23, 8, 11, 30]
  // // 分治
  // function qSort(arr, low, high) {
  //   if (low < high) {
  //     let mid = partition(arr, low, high)
  //     qSort(arr, 0, mid - 1)
  //     qSort(arr, mid + 1, high)
  //   }
  // }
  // function partition(arr, low, high) {
  //   let pivot = arr[high]
  //   let i = low
  //   for (let j = low; j < high; j++) {
  //     if (arr[j] < pivot) {
  //       [arr[i], arr[j]] = [arr[j], arr[i]]
  //       i++
  //     }
  //   }
  //   [arr[i], arr[high]] = [arr[high], arr[i]]
  //   return i
  // }
  // function quickSort(arr) {
  //   qSort(arr, 0, arr.length - 1)
  // }
  // quickSort(arr)
  // console.log(arr);
}
// shell排序
{
  // let arr = [9, 30, 3, 24, 23, 8, 11, 99]
  // function shellSort(arr, n) {
  //   for (let incent = parseInt(n / 2); incent > 0; incent = parseInt(incent / 2)) {
  //     for (let i = incent; i < arr.length; i++) {
  //       let j = i - incent
  //       let key = arr[i]
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
// 堆排序
{
  // let arr = [9, 30, 3, 24, 23, 8, 11, 99]
  // // 维护堆
  // function heapify(arr, length, index) {
  //   let max = index
  //   let lson = index * 2 + 1
  //   let rson = index * 2 + 2
  //   if (lson < length && arr[lson] > arr[max]) {
  //     max = lson
  //   }
  //   if (rson < length && arr[rson] > arr[max]) {
  //     max = rson
  //   }
  //   if (max !== index) {
  //     [arr[max], arr[index]] = [arr[index], arr[max]]
  //     heapify(arr, length, max)
  //   }
  // }
  // function heapSort(arr, n) {
  //   for (let i = parseInt(n / 2); i >= 0; i--) {
  //     // 维护堆
  //     heapify(arr, n, i)
  //   }
  //   // 最后一个下标
  //   for (i = n - 1; i > 0; i--) {
  //     [arr[i], arr[0]] = [arr[0], arr[i]]
  //     heapify(arr, i, 0)
  //   }
  // }
  // heapSort(arr, arr.length)
  // console.log(arr);
}
// 归并排序
{
  // let arr = [9, 30, 3, 24, 23, 8, 11, 99]
  // // 划分
  // function msort(arr, tempArr, left, right) {
  //   if (left < right) {
  //     let mid = parseInt((left + right) / 2)
  //     msort(arr, tempArr, left, mid)
  //     msort(arr, tempArr, mid + 1, right)
  //     merge(arr, tempArr, left, mid, right)
  //   }
  // }
  // // 合并
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
  // // 分治 递归
  // function mergeSort(arr, n) {
  //   let tempArr = []
  //   // 分开
  //   msort(arr, tempArr, 0, n - 1)
  // }
  // mergeSort(arr, arr.length)
  // console.log(arr);
}
// 数组扁平
{
  // let arr = [1, [2, [3, [4, 5]]], 6];
  // function flatter(arr) {
  //   if (!arr.length) {
  //     return
  //   }
  //   return arr.toString().split(',').map((item) => Number(item))
  // }
  // function flatter1() {
  //   while (arr.some(item => Array.isArray(item))) {
  //     arr = [].concat(...arr)
  //   }
  //   return arr
  // }
  // function flatter2(arr) {
  //   return arr.reduce((pre, cur) => {
  //     return pre.concat(Array.isArray(cur) ? flatter2(cur) : cur)
  //   }, [])
  // }
  // console.log(flatter2(arr));
}
// new
{
  // const _new = function (constructor, ...args) {
  //   const obj = {}
  //   obj.__proto__ = constructor.prototype
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
}
// 寄生组合式继承
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
  // function inherit(sub, sup) {
  //   let obj = {}
  //   obj.__proto__ = sup.prototype
  //   sub.prototype = obj
  //   // sub.prototype.constructor = sub
  //   Object.defineProperty(sub.prototype, 'constructor', {
  //     enumerable: false,
  //     configurable: false,
  //     writable: false,
  //     value: sub
  //   })
  // }
  // inherit(Me, Person)

  // let me = new Me('lxxp')
  // console.log(me.name);
  // me.eating()
  // me.fuck()
}
// instanceof 构造函数的prototype是否出现的实例的原型链上
{
  // function _instanceOf(L, R) {
  //   let baseType = ['number', 'string', 'undefined', 'boolean', 'symbol']
  //   if (baseType.includes(typeof L)) {
  //     return false
  //   }
  //   let proto = Object.getPrototypeOf(obj)
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
  // console.log(_instanceOf(obj, Person)); //true
}
// create
{
  // Object.prototype._create = function (proto) {
  //   if (typeof proto !== 'object' || proto == null) {
  //     return null
  //   }
  //   function fn() { }
  //   fn.prototype = proto
  //   return new fn()
  // }
  // // x.__proto__ = {}
  // var x = Object._create({
  //   name: 'lxxp'
  // })

  // console.log(x.__proto__);
}
// is
{
  // Object.prototype._is = function (x, y) {
  //   if (x === y) {
  //     // +0 -0
  //     return x !== 0 || y !== 0 || 1 / x === 1 / y
  //   } else {
  //     // NaN
  //     return x !== x && y !== y
  //   }
  // }
  // console.log(Object._is(NaN, NaN));
  // console.log(Object._is(+0, -0));
  // console.log(Object._is(0, -0));
}
// 深拷贝
{
  // function isObject(value) {
  //   const valueType = typeof value
  //   return (value !== null) && (valueType == 'object' || valueType == 'function')
  // }
  // function _completeDeepClone(target) {
  //   if (!isObject(target)) {
  //     return target
  //   }
  //   if (typeof target === 'symbol') {
  //     return Symbol(target.description)
  //   }
  //   const cloneTarget = Array.isArray(target) ? [] : {}
  //   for (prop in target) {
  //     if (target.hasOwnProperty(prop)) {
  //       cloneTarget[prop] = _completeDeepClone(target[prop])
  //     }
  //   }

  //   // symbol为key
  //   const symbolKeys = Object.getOwnPropertySymbols(target)
  //   for (const symbolKey of symbolKeys) {
  //     cloneTarget[Symbol[symbolKey.description]] = _completeDeepClone(target[symbolKey])
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
  // const res = _completeDeepClone(person)
  // console.log(res);
}
// call
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
  //   if (obj == null || obj == undefined) {
  //     obj = globalThis
  //   }
  //   obj.temp = this
  //   let newArgs = []
  //   let result
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
// apply
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
// bind
{
  // function person(a, b, c) {
  //   // 有new的 this就失效了
  //   console.log(this.name);
  //   console.log(a, b, c);
  //   // return c
  // }
  // person.prototype.x = 'x因素'

  // let cityboy = {
  //   name: '长谷川',
  // }
  // Function.prototype.newBind = function (obj) {
  //   if (typeof this !== 'function') {
  //     return new TypeError('类型错误')
  //   }
  //   const fn = this
  //   const Args = Array.prototype.slice.call(arguments, 1)
  //   const temp = function () { }
  //   newFn = function () {
  //     const restArgs = Array.prototype.slice.call(arguments)
  //     const allArgs = Args.concat(restArgs)
  //     if (this instanceof temp) {
  //       fn.apply(this, allArgs)
  //     } else {
  //       fn.apply(obj, allArgs)
  //     }
  //   }
  //   // newFn.prototype = fn.prototype
  //   temp.prototype = fn.prototype
  //   newFn.prototype = new temp
  //   return newFn
  // }
  // const bindFn = person.newBind(cityboy, 1, 2)
  // const res = bindFn(3)
}
// 迭代器对象
{
  // const infos = {
  //   name: 'lxxp',
  //   age: 20,
  //   hobby: 'none',
  //   // 1.
  //   [Symbol.iterator]() {
  //     let index = 0
  //     let entries = Object.entries(this)
  //     return infosIterator = {
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
  // // 得到迭代器对象
  // const iterator = infos[Symbol.iterator]()
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());

  // for (const iterator of infos) {
  //   console.log(iterator);
  // }
}
// 数组去重
{
  // let arr = [9, 30, 3, 9, 30]
  // function unique1(arr) {
  //   let res = []
  //   let i, j
  //   for (i = 0; i < arr.length; i++) {
  //     for (j = 0; j < arr.length; j++) {
  //       if (arr[i] == arr[j]) {
  //         // 退出这一层循环
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
  //   return Array.from(new Set(arr))
  // }
  // function unique3(arr) {
  //   let res = []
  //   for (let i = 0; i < arr.length; i++) {
  //     let current = arr[i]
  //     if (res.indexOf(current) == -1) {
  //       res.push(current)
  //     }
  //   }
  //   return res
  // }
  // // indexOf+filter
  // function unique4(arr) {
  //   let res = arr.filter((item, index) => {
  //     return arr.indexOf(item) == index
  //   })
  //   return res
  // }
  // console.log(unique4(arr));
}
// 事件总线
{
  // class eventEmitter {
  //   constructor() {
  //     this.eventMap = {}
  //     // { 'func':[f1,f2] }
  //   }
  //   on(evenName, eventFn) {
  //     let eventFns = this.eventMap[evenName]
  //     if (!eventFns) {
  //       eventFns = []
  //       this.eventMap[evenName] = eventFns
  //     }
  //     eventFns.push(eventFn)
  //   }
  //   off(evenName, eventFn) {
  //     if (!this.eventMap[evenName]) {
  //       return
  //     }
  //     this.eventMap[evenName] = this.eventMap[evenName].filter((item) => {
  //       return item !== eventFn
  //     })
  //   }
  //   once(evenName, eventFn) {
  //     function fn() {
  //       eventFn()
  //       this.off(evenName, fn)
  //     }
  //     this.on(evenName, fn)
  //   }
  //   emit(evenName, ...args) {
  //     let eventFns = this.eventMap[evenName]
  //     if (!eventFns) {
  //       return
  //     }
  //     eventFns.forEach(item => {
  //       item.apply(this, args)
  //     });
  //   }
  // }
  // const eventBus = new eventEmitter()
  // function fn() {
  //   console.log('111');
  // }
  // eventBus.on("navclick", fn)
  // eventBus.emit("navclick")
  // eventBus.off("navclick", fn)
  // eventBus.emit("navclick")
  // console.log(eventBus.eventMap);
}
// 定时器模拟
{
  // // timeout模拟interval
  // function _setInterval(fn, t) {
  //   let timer = null
  //   function interval() {
  //     fn()
  //     timer = setTimeout(interval, t);
  //   }
  //   interval()
  // }
  // function _setTimeout(fn, t) {
  //   const timer = setInterval(() => {
  //     fn()
  //     clearInterval(timer)
  //   }, t);
  // }
}
// compose
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

  // function compose(...fns) {
  //   if (!fns) return
  //   if (fns.length == 1) return fn[0]
  //   return fns.reduce((pre, cur) => {
  //     // 是返回函数的参数
  //     return (...args) => pre(cur(...args))
  //   })
  // }
}
// 模版字符串
{
  // let _template = '我是￥{name},年龄￥{age}'
  // let data = {
  //   // 对象里的属性名是字符串形式的
  //   name: 'lxxp',
  //   age: 20
  // }
  // function render(template, data) {
  //   let reg = /\￥\{(\w+)\}/
  //   if (reg.test(template)) {
  //     const keys = template.match(reg)[1]
  //     // 把匹配到的东西替换成对象里面的值
  //     template = template.replace(reg, data[keys])
  //     return render(template, data)
  //   }
  //   return template
  // }
  // let res = render(_template, data)
  // console.log(res);
}
// flatten
{
  // const obj = {
  //   a: {
  //     b: 1,
  //     c: 2,
  //     d: { e: 5 }
  //   },
  //   b: [1, 3, { a: 2, b: 3 }],
  //   c: 3
  // }
  // function _flatten(obj) {
  //   let result = {}
  //   // key和value
  //   let process = (key, value) => {
  //     // 1.非对象类型
  //     if (Object(value) !== value) {
  //       if (key) {
  //         result[key] = value
  //       }
  //     } else if (Array.isArray(value)) {
  //       // 数组
  //       for (let i = 0; i < value.length; i++) {
  //         process(`${key}[${i}]`, value[i])
  //       }
  //       if (value.length === 0) {
  //         result[key] = []
  //       }
  //     } else {
  //       // 对象
  //       let keys = Object.keys(value)
  //       keys.forEach((item) => {
  //         process(key ? `${key}.${item}` : `${item}`, value[item])
  //       })
  //       if (keys.length == 0 && key) {
  //         result[key] = {}
  //       }
  //     }
  //   }
  //   process('', obj)
  //   return result
  // }
  // console.log(_flatten(obj));
}
// map
{
  // let arr = [1, 2, 3]
  // Array.prototype._map = function (fn) {
  //   if (typeof fn !== 'function') {
  //     return
  //   }
  //   let newArr = []
  //   let arr = this
  //   for (const item of arr) {
  //     newArr.push(fn(item))
  //   }
  //   return newArr
  // }
  // console.log(arr._map((item) => {
  //   return item * 2
  // }));

}
// filter
{
  // const array = [1, 2, 34, 45, 213, 11]
  // Array.prototype._filter = function (fn) {
  //   if (typeof fn !== 'function') return
  //   let newArr = []
  //   let arr = this
  //   for (let i = 0; i < arr.length; i++) {
  //     const res = fn(arr[i])
  //     res && newArr.push(arr[i])
  //   }
  //   return newArr
  // }
  // const res = array._filter((item) => {
  //   return item > 100
  // })
  // console.log(res);
}
// reduce
{
  // Array.prototype._reduce = function (fn, pre) {
  //   for (let i = 0; i < this.length; i++) {
  //     if (pre == undefined) {
  //       pre = fn(this[i], this[i + 1], i + 1, arr)
  //       i++
  //     } else {
  //       pre = fn(pre, this[i], i, this)
  //     }
  //   }
  //   return pre
  // }
  // const arr = [1, 2, 34, 45, 213, 11]
  // const res = arr._reduce((pre, cur) => {
  //   return pre + cur
  // }, 0)
  // console.log(res);
}
// ajax
{
  // const request = function (url) {
  //   return new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest()
  //     xhr.open('GET', url)
  //     xhr.onreadystatechange = function () {
  //       if (xhr.readyState !== 4) return
  //       if (xhr.readyState == 200) {
  //         resolve(xhr.responseText)
  //       } else {
  //         reject(new Error(xhr.responseText))
  //       }
  //     }
  //     xhr.send()
  //   })
  // }
}