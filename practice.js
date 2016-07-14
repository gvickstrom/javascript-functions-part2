// var strLength = function (str) {
//   return [ str, str.lenth];
// }


// function printStrLength (strLengthArr) {
//   console.log("The Phrase" + " " + strLengthArr[0] + strLengthArr[1] + " " + "characters long")

  function listIt (items) {
    return items[0] + ': ' + items[1];
  }

  listIt([1, 'Zarya']);

// [ '1: Zarya', '2: Mei', '3: Mercy' ]

var listItems = [
[ 1, 'Zarya' ],
[ 2, 'Mei' ],
[ 3, 'Mercy' ],
];

  function newFunct (listItems) {
    for (var i = 0; i <= listItems.length; i++) {
      return listItems[i];
    }
  }
  newFunct();

  var listItems = [
  [ 1, 'Zarya' ],
  [ 2, 'Mei' ],
  [ 3, 'Mercy' ],
];

function listIt (items) {
  return items[0] + ': ' + items[1];
}

function allTheThings (items, callback) {
  var result = [];
  for (var i = 0; i < items.length; i++) {
    // `pair` is an array of two items (e.g. [ 2, 'Mei' ])
    var pair = items[i];

    // `formattedAsList` is the two items, formatted (e.g. '2: Mei')
    var formattedAsList = callback(pair);

    // Now we take that result and push it into a final array
    result.push(formattedAsList);
  }

  return result;
}

allTheThings(listItems, listIt);
// [ '1: Zarya', '2: Mei', '3: Mercy' ]





////



function map (array, callbackFn) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var item = callbackFn(array[i]);
    result.push(item);
  }

  return result;
}

var myArray = [10, 20, 30];
// map(myArray, myFn) should return [11, 21, 31]


function addOne (str) {
  return str + 1;
}
map(myArray, addOne);

function add (num) {
  return function (input) {
    return input + num;
  }
}
  var addOne = add(1);
  addOne(5); //will equal 6
  add(4)(4); //will add to 8
