const infos = {
  name: 'lxxp',
  age: 20,
  hobby: 'none',
  // 1.对象里有这个属性
  [Symbol.iterator]() {
    let entries = Object.entries(this)
    let index = 0
    // 2.迭代器函数
    return infoIterator = {
      // 2.1 函数要next函数
      next: () => {
        if (index < entries.length) {
          // 2.2 next返回 done+value组成的对象
          return {
            done: false,
            value: entries[index++]
          }
        } else {
          return {
            done: true
          }
        }
      }
    }
  }
}

// 取出 [Symbol.iterator] 然后调用 得到返回带有next的对象
const iterator = infos[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 这个对象就变成了一个可迭代的对象
for (const item of infos) {
  console.log(item);
}