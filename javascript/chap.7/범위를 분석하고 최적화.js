// -- Question 2
var RED = 0,
  GREEN = 1,
  BLUE = 2;
function redGreenBlueCount(arr) {
  var counter = new Array(3).fill(0);
  for (var i = 0; i < arr.length; i++) {
    var curr = arr[i];
    if (curr == RED) {
      counter[RED]++;
    } else if (curr == GREEN) {
      counter[GREEN]++;
    } else if (curr == BLUE) {
      counter[BLUE]++;
    }
  }
  return counter;
}

function redGreenBlueCount(arr) {
  var RED = 0,
    GREEN = 1,
    BLUE = 2,
    counter = new Array(3).fill(0);
  for (var i = 0; i < arr.length; i++) {
    var curr = arr[i];
    if (curr == RED) {
      counter[RED]++;
    } else if (curr == GREEN) {
      counter[GREEN]++;
    } else if (curr == BLUE) {
      counter[BLUE]++;
    }
  }
  return counter;
}

//
