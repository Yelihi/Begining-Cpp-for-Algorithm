// 내가 푼 풀이
function solution(my_string, num1, num2) {
  let arr = Array.from(my_string);
  arr[num1] = my_string[num2];
  arr[num2] = my_string[num1];
  return arr.join("");
}

// 다른 사람 풀이
function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}
