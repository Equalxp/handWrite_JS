//apply方法 和call方法很相似
function person(a, b, c) {
  console.log(this.name);
  console.log(a, b, c);
  return a
}
let cityboy = {
  name: '长谷川',
}
//js函数其实都是'Function对象' 'Function对象'是'构造函数'
//'构造函数'有'原型对象' ---> Function.prototype (call就存在于此)
//多一个arr 形式参数 更好的接收参数
Function.prototype.newApply = function (obj, arr) {
  // 特殊情况
  if (obj === null || obj === undefined) {
    obj = globalThis
  }
  //这里的this是person函数 obj.p = this 为obj追加了一个函数
  obj.p = this
  // 判断 arr参数
  if (!arr) {
    obj.p()
  } else {
    let newArgs = []
    // arr解构push
    for (let i = 0; i < arr.length; i++) {
      newArgs.push(arr[i])
    }
    //ES6 解构
    result = obj.p(...newArgs)
  }
  // 不能改变对象 删除obj.p
  delete obj.p
  return result
}
let res = person.newApply(cityboy, ['beams', 'nautica', 'converse'])
console.log('return返回结果:', res);
