// 1.new URLSearchParams
const query = 'name=lxxp&age=20'
// { 'name' => 'lxxp', 'age' => '20' } 实际上是个entries
const queryParams = new URLSearchParams(query)

console.log(Object.fromEntries(queryParams));

// 2. new url()
const url = new URL("https://stackabuse.com/search?q=devpoint&page=1");
const searchParams = url.searchParams;
console.log(searchParams);
searchParams.get('1'); // 'devpoint'
searchParams.get("page"); // '1'

// 3.手写
function getQueryParams(url) {
  const paramsArr = url.slice(url.indexOf('?') + 1).split('&')
  const params = {}
  paramsArr.map((param) => {
    const [key, value] = param.split('=')
    params[key] = decodeURIComponent(value)
  })
  return params
}
console.log(getQueryParams('https://stackabuse.com/search?q=devpoint&page=1'));