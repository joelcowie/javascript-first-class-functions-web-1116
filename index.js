function receivesAFunction(callback) {
  callback()
}

function namedFunction() {
  console.log("sup")
}

function returnsANamedFunction() {
  return namedFunction
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("yo")
  }
}
