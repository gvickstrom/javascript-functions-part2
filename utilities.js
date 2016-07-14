//define function called max that takes an array of numbers and a callback function as arguments then finds the max value in the array. return callback with the max value passed into it

function max(array, callBack) {
  var maxValue = array[0];
  for(var i = 1; i < array.length; i++) {
    if(array[i] > maxValue) {
      maxValue = array[i];
    }
  }
    return callBack (maxValue);
}

function min() {
  return 'not doing anything';
}

  module.exports = {
    'max': max
    min: min
  };

  // max([1,2,3], function(result) {
  //   console.log(result);
  // });




  //

//   function awesome(fn) {
//     console.log(fn);
//   }
// var hi = function() {return 'hi'};
// awesome(hi);
