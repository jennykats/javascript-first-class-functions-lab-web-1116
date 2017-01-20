function countdown (callback) {
  window.setTimeout(function(){
    callback();
  }, 2000);
}

function createMultiplier (value) {
  return function (num) {
  return value * num;
  };
}


function multiplier (a,b) {
  return a * b
}

var doubler = createMultiplier(2)
var tripler = createMultiplier (3)
var triplerWithBind = multiplier.bind(null, 3)
var doublerWithBind = multiplier.bind(null, 2)
