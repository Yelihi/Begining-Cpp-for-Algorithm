// 내가 푼 풀이
var isPalindrome = function (x) {
  return (x + "").split("").reverse().join("") === x + "" ? true : false;
};

// 다른 사람 풀이
var isPalindrome = function (x) {
  var reverse = 0;
  var copy = x;

  while (copy > 0) {
    const digit = copy % 10;
    reverse = reverse * 10 + digit;
    copy = ~~(copy / 10); //Math.floor(copy / 10)
  }

  return reverse == x;
};
