const version = '1.0.0'
function doSomething() {
  console.log('you can do anything with here')
}

function moduleLib (options) {
  console.log(options)
}

moduleLib.version = version
moduleLib.doSomething = doSomething

module.exports = moduleLib