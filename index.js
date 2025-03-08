function receivesAFunction(callBack) {
  callBack();
}
function returnsANamedFunction() {
  function namedFunction() {
    console.log("I am a named function");
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("I am an anonymous function");
  };
}

if (typeof module !== "undefined || module.exports") {
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
  };
}
