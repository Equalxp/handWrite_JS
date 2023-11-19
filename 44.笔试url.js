let url = "http://www.baidu.com/lxp?name=张三&age=25&sex=男&wife=%E7%BD%97%E6%BD%87%E9%B9%8F"
let url1 = "http://www.baidu.com?lxp?name=张三&age=25&sex=男&wife=%E7%BD%97%E6%BD%87%E9%B9%8F"
let url2 = 'https://example.com?foo=99&bar=baz'

function getUrlParams(url) {
  let urlStr = url.split('?')
  console.log(urlStr);
  if (urlStr.length > 2) {
    return {}
  }
  let urlParams = urlStr[1].split('&')
  let obj = {}
  console.log(urlParams);
  urlParams.reduce((pre, cur) => {
    let arr = cur.split('=')
    // console.log(arr);
    obj[decodeURI(arr[0])] = decodeURI(arr[1]) == 'undefined' ? "" : decodeURI(arr[1])
  }, obj)
  return obj
}
// function getUrlParams(url) {
//   let urlStr = url.split('?')
//   if (urlStr.length > 2) {
//     return {}
//   }
//   console.log(urlStr);
//   let obj = {}

//   let urlParams = urlStr[1].split('&')
//   urlParams.reduce((pre, cur) => {
//     let arr = cur.split('=')
//     obj[decodeURI(arr[0])] = decodeURI(arr[1]) == 'undefined' ? "" : decodeURI(arr[1])
//   }, obj)
//   return obj
// }
console.log(getUrlParams(url))