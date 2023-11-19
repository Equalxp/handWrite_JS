
function _get(source, path, defaultValue = undefined) {
  if (Array.isArray(path)) {
    path = path.join('.')
  }
  const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
  let result = source
  for (const p of paths) {
    // null和undefined情况 用Object包装
    result = Object(result)[p]
    // console.log('result', result);
    if (result == undefined) {
      return defaultValue
    }
  }
  return result
}

const a = _get({ a: null }, 'a.b.c', 3)
console.log(a);
// output: 3

const b = _get({ a: undefined }, 'a', 3)
console.log(b);
// output: 3

const c = _get({ a: null }, 'a', 3)
console.log(c);
// output: 3

const d = _get({ a: [{ b: 1 }] }, 'a[0].b', 3)
console.log(d);
// output: 1

// Given object 
var object = { 'c': [{ 'python': { 'java': 3 } }] };

// Use of _.get method  
console.log(_get(object, ['c', '0', 'python', 'java']));