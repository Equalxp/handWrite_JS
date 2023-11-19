async function test() {
  console.log('开始')
  await sleep(4000)
  console.log('结束')
}

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
test()