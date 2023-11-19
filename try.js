let arr = [9, 30, 3, 24, 23, 8, 11, 99]
// 冒泡
// {
//   let i
//   let j
//   // 要执行多少趟
//   for (let i = 0; i < arr.length - 1; i++) {
//     // 每一趟交换多少次
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }
//     }
//   }
//   for (const item of arr) {
//     console.log(item);
//   }
// }

// 选择 选择minIndex 依次放到前面
// {
//   function selectSort(arr) {
//     let length = arr.length
//     let minIndex
//     for (let i = 0; i < length - 1; i++) {
//       minIndex = i
//       for (let j = 0; j < length - 1 - i; j++) {
//         if (arr[minIndex] > arr[j]) {
//           minIndex = j
//         }
//       }
//       if (minIndex !== i) {
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//       }
//     }
//   }
//   selectSort(arr)
//   for (const item of arr) {
//     console.log(item);
//   }
// }

// 插入 第二个元素开始
// {
//   function insertSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       let temp = arr[i]
//       let j = i - 1
//       while (j >= 0 && arr[j] > temp) {
//         arr[j + 1] = arr[j]
//         j--
//       }
//       arr[j + 1] = temp
//     }
//   }
//   insertSort(arr)
//   for (const item of arr) {
//     console.log(item);
//   }
// }

// 快速排序
// {
//   // 分治
//   function qSort(arr, low, high) {
//     if (low < high) {
//       let mid = partition(arr, low, high)
//       qSort(arr, low, mid - 1)
//       qSort(arr, mid + 1, high)
//     }
//   }
//   function partition(arr, low, high) {
//     // 最后一位为标志
//     let pivot = arr[high]
//     let i = low
//     for (let j = low; j < high; j++) {
//       if (arr[j] < pivot) {
//         // j是往后找的指针 i和j指向同一个 j往后找
//         // 只要是j比pivot小 ij就换位置 i++ 
//         // j还要++
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//         i++
//       }
//     }
//     [arr[high], arr[i]] = [arr[i], arr[high]]
//     return i
//   }
//   function quickSort(arr) {
//     let length = arr.length
//     // 传的是下标
//     qSort(arr, 0, length - 1)
//   }
//   quickSort(arr)
//   for (const item of arr) {
//     console.log(item);
//   }
// }

// shell排序
// {
//   let length = arr.length
//   function shellSort(arr, n) {
//     let i, j, key, incent
//     // 增量排序 每次都除以2
//     for (incent = parseInt(n / 2); incent > 0; incent = parseInt(incent / 2)) {
//       for (i = incent; i < n; i++) {
//         key = arr[i]
//         j = i - incent
//         while (j >= 0 && arr[j] > key) {
//           arr[j + incent] = arr[j]
//           j -= incent
//         }
//         arr[j + incent] = key
//       }
//     }
//   }

//   shellSort(arr, length)
//   //打印排序好的数组
//   for (const item of arr) {
//     console.log(item);
//   }
// }

// 堆排序
{

}

// 归并排序
{

}

// 浅拷贝-1
// {
//   function isObject(value) {
//     const valueType = typeof value
//     return (value !== null) && (valueType === 'object' || valueType === 'function')
//   }

//   const _sampleDeepClone = (target) => {
//     if (!isObject(target)) {
//       return target
//     } else {
//       // 对象和数组
//       const cloneTarget = Array.isArray(target) ? [] : {}
//       for(prop in target) {
//         if(target.hasOwnProperty(prop)) {
//           cloneTarget[prop] = _sampleDeepClone(target[prop])
//         }
//       }
//       return cloneTarget
//     }
//   }

//   const person = {
//     name: 'lxxp',
//     age: 18,
//     gf: {
//       name: 'hyy',
//       bf: {
//         name: 'LXP',
//         hobby: ['kiss', 'basketball']
//       }
//     }
//   }
//   const res = _sampleDeepClone(person)
//   console.log(res);

//   res.gf.name = 'hyyy'
//   console.log(res);
//   console.log(person);
// }

// 深拷贝
// {
//   function isObject(value) {
//     const valueType = typeof value
//     return (value !== null) && (valueType === 'object' || valueType === 'function')
//   }

//   function _completeDeepClone(target, map = new WeakMap()) {
//     // 1.值是symbol类型
//     if (typeof target === 'symbol') {
//       return Symbol(target.description)
//     }
//     if (!isObject(target)) {
//       return target
//     }
//     // 2.如果value是set类型 新创建set然后加进去
//     if (target instanceof Set) {
//       const newSet = new Set()
//       for (const item of target) {
//         newSet.add(_completeDeepClone(item))
//       }
//       return newSet
//     }
//     // 如果有 则使用当时保存的值
//     if (map.get(target)) {
//       return map.get(target)
//     }
//     const cloneTarget = Array.isArray(target) ? [] : {}
//     // 提前保存好这个{}对象
//     map.set(target, cloneTarget)
//     for (prop in target) {
//       cloneTarget[prop] = _completeDeepClone(target[prop], map)
//     }
//     // symbol类型当作key值
//     const symbolkeys = Object.getOwnPropertySymbols(target)
//     for (const symbolKey of symbolkeys) {
//       // 行创建key值
//       cloneTarget[Symbol(symbolKey.description)] = _completeDeepClone(target[symbolKey])
//     }
//     return cloneTarget
//   }
//   const set = new Set([{ a: '1', b: '2' }, 'hyyy'])
//   console.log(set);//Set(2) { 'lxxp', 'hyyy' }
//   const s1 = Symbol('s1')
//   const s2 = Symbol('s2')

//   const person = {
//     name: 'lxxp',
//     age: 18,
//     gf: {
//       name: 'hyy',
//       bf: {
//         name: 'LXP',
//         hobby: ['kiss', 'basketball']
//       }
//     },
//     set: set,
//     SymbolKey: Symbol('SB'),
//     [s1]: 'aaa',
//     [s2]: 'bbb'
//   }

//   // 5.循环引用
//   person.self = person
//   const res = _completeDeepClone(person)

//   console.log(res);
//   res.gf.name = 'hyyy'
//   console.log(res);
//   console.log(person);
// }

// call
// {
//   function person(a, b, c) {
//     console.log(this.name);
//     console.log(a, b, c);
//     return a
//   }
//   let lxp = {
//     name: '罗潇鹏是傻逼'
//   }
//   Function.prototype._call = function (obj) {
//     if (obj === null || obj === undefined) {
//       obj = globalThis
//     }
//     obj.func = this
//     let newArgs = []
//     for (let i = 1; i < arguments.length; i++) {
//       newArgs.push(arguments[i])
//     }
//     let result = obj.func(...newArgs)
//     delete obj.func
//     return result
//   }
//   let res = person._call(lxp,1,2,3)
//   console.log(res);
// }

// apply
// {
//   function person(a, b, c) {
//     console.log(this.name);
//     console.log(a, b, c);
//     return a
//   }
//   let cityboy = {
//     name: '长谷川',
//   }
//   Function.prototype._apply = function (obj, arr) {
//     if (obj === null || obj === undefined) {
//       obj = globalThis
//     }
//     obj.func = this
//     let result = null
//     if (!arr) {
//       obj.p()
//     } else {
//       let newArgs = []
//       for (let i = 0; i < arr.length; i++) {
//         newArgs.push(arr[i])
//       }
//       result = obj.func(...newArgs)
//     }
//     delete obj.func
//     return result
//   }
//   let res = person._apply(cityboy, ['beams', 'nautica', 'converse'])
//   console.log(res);
// }

// 数组去重
// {
//   //
//   let arr = [9, 30, 3, 9, 30]
//   function unique(arr) {
//     let res = []
//     let i, j
//     for (i = 0; i < arr.length; i++) {
//       for (j = 0; j < res.length; j++) {
//         if (arr[i] === res[j]) {
//           // 有一样的就直接break
//           break
//         }
//       }
//       // 没有一样的就加进去
//       if (j === res.length) {
//         res.push(arr[i])
//       }
//     }
//     return res
//   }
//   console.log(unique(arr));
//   arr = [9, 30, 3, 9, 30]
//   function unique1(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//       if (res.indexOf(arr[i]) === -1) {
//         res.push(arr[i])
//       }
//     }
//     return res
//   }
//   console.log('2', unique1(arr));

//   arr = [9, 30, 3, 9, 30]
//   function unique2(arr) {
//     let res = arr.filter(function (item, index, arr) {
//       return arr.indexOf(item) === index
//     })
//     return res
//   }
//   console.log('3', unique2(arr));

//   arr = [9, 30, 3, 9, 30]
//   function unique4(arr) {
//     return Array.from(new Set(arr))
//   }
//   console.log('4', unique4(arr));
// }

// 发布订阅
// {
//   class eventEmitter {
//     constructor() {
//       this.eventMap = {}
//     }
//     on(evenName, eventFn) {
//       let eventFns = this.eventMap[evenName]
//       if (!eventFns) {
//         eventFns = []
//         this.eventMap[evenName] = eventFns
//       }
//       eventFns.push(eventFn)
//     }
//     // 取消订阅
//     off(evenName, eventFn) {
//       if (!this.eventMap[evenName]) return
//       this.eventMap[evenName] = this.eventMap[evenName].filter((item) => {
//         return item !== eventFn
//         //
//       })
//     }
//     once(evenName, eventFn) {
//       function fn() {
//         eventFn()
//         this.off(evenName, fn)
//       }
//       this.on(evenName, fn)
//     }
//     //执行
//     emit(evenName, ...args) {
//       let eventFns = this.eventMap[evenName]
//       if (!eventFns) return
//       eventFns.forEach(fn => {
//         fn.apply(this, args)
//       })
//     }
//   }

//   const eventBus = new eventEmitter()

//   eventBus.on('click', () => {
//     console.log('111');
//   })
//   eventBus.on('click', () => {
//     console.log('222');
//   })
//   eventBus.on('click', () => {
//     console.log('333');
//   })

//   eventBus.emit('click')

// }

// 观察者模式
// {
//   class Subject {
//     constructor(name) {
//       this.name = name
//       this.state = 'sad'
//       this.observer = []
//     }
//     attach(ther) {
//       this.observer.push(ther)
//     }
//     setState(state) {
//       this.state = state
//       this.observer.forEach((ther) => {
//         ther.update(this)
//       })
//     }
//   }

//   class Observer {
//     constructor(name) {
//       this.name = name
//     }
//     update(subject) {
//       console.log(this.name + subject.name + subject.state);
//     }
//   }
//   let bb = new Subject('baby')
//   let father = new Observer('fa')
//   let mother = new Observer('ma')

//   bb.attach(father)
//   bb.attach(mother)

//   // 状态改变
//   bb.setState('happy')

// }

// instanceof 构造函数的prototype是否出现在实例的原型链上
// {
//   function _instanceOf(L, R) {
//     const baseType = ['string', 'number', 'boolean', 'undefined', 'symbol']
//     if (baseType.includes(typeof L)) {
//       return false
//     }
//     while (true) {
//       // L是实例 R是对象
//       if (L === null) {
//         return false
//       }
//       // 构造函数的prototype是否出现在实例的原型链上
//       if (L.__proto__ === R.prototype) {
//         return true
//       }
//       L = L.__proto__
//     }
//   }
//   function Person() { }
//   const obj = new Person()
//   console.log(_instanceOf(obj, Person)); //true
// }

// new
// 创建一个新的空对象 该对象的隐式原型 指向 构造函数的显示原型
// 改变this
// {
//   const _new = function (constructor,...args) {
//     const obj = {}
//     obj.__proto__ == constructor.prototype
//     let res = constructor.apply(obj,args)
//     return  res instanceof Object ? res : obj
//   }
//   function Person() {
//     this.name = 'lxxp'
//     this.func = () => {
//       console.log('lxxp is sb');
//     }
//   }
//   const p1 = _new(Person)
//   console.log(p1.name);
// }

// ajax
// {
//   const request = function(url) {
//     // 返回一个promise
//     return new Promise((resolve,reject) => {
//       const xhr = new XMLHttpRequest()
//       // 响应头
//       xhr.setRequestHeader("Content-Type","application/json")
//       // 监听readystate的变化 对不同的码进行ife/lse
//       xhr.onreadystatechange  = function() {
//         if(xhr.readyState !== 4) return
//         if(xhr.status == 200 || xhr.status == 304) {
//           resolve(xhr.responseText)
//         } else {
//           reject(new Error(xhr.responseText))
//         }
//       }
//       xhr.send()
//    })
//   }
// }

// 数组扁平化
// {
//   const arr = [1, 2, [1, [2, 3, [4, 5, [6]]]]]
//   // console.log(arr.length); // 3
//   console.log(arr);
//   function flatter1(arr) {
//     if (!arr.length) {
//       return
//     }
//     return arr.toString().split(',').map((item) => {
//       return Number(item)
//     })
//   }
//   let res = flatter1(arr)
//   console.log(res);

//   function flatter2(arr) {
//     return arr.reduce((pre, cur) => {
//       return pre.concat(Array.isArray(cur) ? flatter2(cur) : cur)
//     }, [])
//   }
//   let res1 = flatter2(arr)
//   console.log(res1);

//   // for循环递归
//   let result = []
//   function flatter3(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if(Array.isArray(arr[i])) {
//         flatter3(arr[i])
//       } else {
//         result.push(arr[i])
//       }
//     }
//     return res
//   }
//   let res2 = flatter3(arr)
//   console.log(res2);
// }

// 寄生组合式继承
// {
//   function Person(name) {
//     this.name = name
//     this.eating = function () {
//       console.log('肖骏腾是傻逼');
//     }
//   }

//   function Student(name) {
//     Person.call(this, name)
//   }
//   // sup是父类
//   function inherit(sub, sup) {
//     let obj = {}
//     obj.__proto__ = sup.prototype
//     sub.prototype = obj
//     Object.defineProperty(sub.prototype, 'constructor', {
//       enumerable: false,
//       configurable: false,
//       writable: false,
//       value: sub
//     })
//   }
//   // 创建一个空对象obj 空对象的隐式原型指向父类的显示原型
//   // 子类的prototype指向obj对象 这样子类的实例对象就有原型链
//   // 子类实例.__proto__ == obj.__protp__ == sup.prototype

//   inherit(Student, Person)

//   let stu1 = new Student('lxxp')
//   console.log(stu1.name);
//   stu1.eating()

// }

// 定时器
// {
//   // setTimeout 模拟 setInterval
//   function _setInterval(fn,t) {
//     let timer = null
//     function interval() {
//       fn()
//       timer = setTimeout(interval,t)
//     }
//     interval()
//   }
//   _setInterval(()=>{
//     console.log('定时器调用');
//   },1000)
// }

// compose
// {
//   function fn1(x) {
//     return x + 1;
//   }
//   function fn2(x) {
//     return x + 2;
//   }
//   function fn3(x) {
//     return x + 3;
//   }
//   function fn4(x) {
//     return x + 4;
//   }

//   // console.log(fn1(fn2(fn3(fn4(1)))))
//   const res = compose(fn1, fn2, fn3, fn4);
//   // 函数扁平化 返回经过处理的函数
//   function compose(...fn) {
//     if(!fn) return (v) => v
//     if(fn.length === 1) return fn[0]
//     return fn.reduce((pre,cur)=>{
//       return (...args) => pre(cur(...args))
//     })
//   }
//   console.log(res(1));
// }

// 模版字符串
// {
//   let _template = '我是￥{name},年龄￥{age}'
//   let data = {
//     // 对象里的属性名是字符串形式的
//     name: 'lxxp',
//     age: 20
//   }

//   function render(template, data) {
//     const reg = /\￥\{(\w+)\}/
//     if (reg.test(template)) {
//       const key = template.match(reg)[1] //name
//       template = template.replace(reg, data[key])
//       return render(template, data) // 再次调用
//     }
//     return template
//   }

//   let res = render(_template, data)
//   console.log(res);

// }

// flatten 扁平化
// {
//   const obj = {
//     a: {
//       b: 1,
//       c: 2,
//       d: { e: 5 }
//     },
//     b: [1, 3, { a: 2, b: 3 }],
//     c: 3
//   }
//   function _flatten1(obj) {
//     let result = {}
//     let process = (key, value) => {
//       // 基础数据类型
//       if (Object(value) !== value) {
//         if (key) {
//           result[key] = value
//         }
//       } else if (Array.isArray(value)) {
//         for (let i = 0; i < value.length; i++) {
//           // {key}[${i}]=`b[0]` value[0] = 1
//           process(`${key}[${i}]`, value[i])
//         }
//         if (value.length === 0) {
//           result[key] = []
//         }
//       } else {
//         let objArr = Object.keys(value)
//         objArr.forEach(item => {
//           // 第一次没有传递key值 有key就传key下的item 没有就直接传item
//           process(key ? `${key}.${item}` : `${item}`, value[item])
//         })
//         if (objArr.length === 0 && key) {
//           result[key] = {}
//         }
//       }
//     }
//     process('', obj)
//     return result
//   }
//   console.log(_flatten1(obj));
// }

// Object.is
// {
//   console.log(Object.is(NaN, NaN)); //true

//   console.log(Object.is(0 === -0)); //false
//   console.log(Object.is(+0 === -0)); //false
//   console.log(Object.is(+0 === 0)); //false

//   // 和 === 的区别
//   Object.prototype._is = function (x, y) {
//     if (x === y) {
//       // 只需要判断0的情况 +0 0 -0
//       return x !== 0 || 1 / x === 1 / y
//     }
//     // NaN 
//     return x !== x && y !== y
//   }
//   console.log(Object._is(NaN, NaN)); // true
//   console.log(Object._is(+0, -0)); // false
// }

// create
// {
//   Object.prototype._create = function (proto) {
//     if (typeof proto !== 'object' || proto == null) return
//     const fn = function () { }
//     fn.prototype = proto // 链接
//     return new fn()
//     // create 就是让x.__proto__ = 传进来的参数
//   }
//   var x = Object._create({
//     name: 'lxxp'
//   })
//   console.log(x);
//   console.log(x.__proto__); //{ name: 'lxxp' }
// }

// map的实现
// {
//   let arr = [1, 2, 3]
//   Array.prototype._map = function (fn) {
//     if (typeof fn !== 'function') return
//     let array = this // 原数组
//     let newArr = []
//     for(const item of array) {
//       newArr.push(fn(item))
//     }
//     return newArr
//   }
//   console.log(arr._map((item) => {
//     return item * 2
//   }))
// }

// filter函数的实现
// {
//   const array = [1, 2, 34, 45, 213, 11]
//   Array.prototype.filter = function(Fn) {
//     if(typeof Fn !== 'function') return
//     const newArr = []
//     const arr = this
//     for(let i = 0; i< arr.length; i++) {
//       const res = Fn(arr[i]) // res得到的是t/f
//       res && newArr.push(arr[i])
//     }
//     return newArr
//   }
// }

// reduce 函数的实现
// {
//   Array.prototype._reduce = function (fn, pre) {
//     for (let i = 0; i < this.length; i++) {
//       if(pre === undefined) {
//         pre = fn(this[i], this[i + 1], i + 1, this)
//       } else {
//         pre = fn(pre, this[i], i, this)
//       }
//     }
//     return pre
//   }
//   const arr = [1, 2, 34, 45, 213, 11]
//   const res = arr._reduce((pre, cur) => {
//     return pre + cur
//   }, 0)
//   console.log(res);

// }
{
  // function Person(name) {
  //   this.name = name
  //   console.log(this.name);
  // }
  // // 没有使用new相当于单纯调用函数
  // var a = Person('Tom')
  // console.log(name);
  // console.log(a);
  // var b = new Person('lxxp')
  // console.log(b);
}