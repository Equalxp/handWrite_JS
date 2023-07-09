
/**
 * 该函数可以冻结一个对象，一个被冻结的对象
 * 不能被修改
 * 不能添加新的属性
 * 不能删除已有属性
 * symbol也要冻结 只冻结自身(原型链不冻结) 
 */

Object.prototype._freeze = function (obj) {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError(`thi ${obj} is not a object`)
  }

  const keys = Object.getOwnPropertyNames(obj)
  const symbols = Object.getOwnPropertySymbols(obj)

    ;[...keys, ...symbols].forEach(key => {
      Object.defineProperty(obj, key, {
        configurable: false,
        writable: false
      })
    })
  //同时也相当于把原型链冻结
  Object.preventExtensions(obj)
}

const obj = {
  
}