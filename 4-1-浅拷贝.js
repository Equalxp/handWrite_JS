
const info = {
  name:'lxxxp',
  age:20,
  gf:{
    name:'hyyyy'
  },
  fn:()=>{
    console.log('lxp is SB');
  },
  // obj:info
}
// 循环引用
info.obj = info

//1.引用赋值
// const obj1 = info

//2.浅拷贝
// const obj1 = {...info}
// obj1.name = 'lxxp'
// obj1.gf.name = 'hyy'
// console.log(info);

// const obj2 = Object.assign({},info)
// obj2.name = 'lxxp'
// obj2.gf.name = 'hyy'
// console.log(info);

//深拷贝 默认没有深拷贝
//1.JSON
//转化成字符串 再创建一个全新的对象
// 对于函数和Symbol 拷贝不了
// const obj3 = JSON.parse(JSON.stringify(info))
// console.log(obj3);
// obj3.gf.name = 'hyy'
// console.log(info);
//2.库函数

//3.自己写

const person = {
  name:'lxxp',
  age:18,
  gf:{
    name:'hyy',
    bf:{
      name:'LXP',
      hobby:'kiss'
    }
  }
}