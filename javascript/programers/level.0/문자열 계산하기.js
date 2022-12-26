// 내가 푼 풀이
function solution(my_string) {
  let sum = 0;
  let string = my_string.split(" ");
  let prefix = "plus";
  for (let i of string) {
    if (!isNaN(i - 0)) {
      prefix == "minus" ? (sum -= parseInt(i)) : (sum += parseInt(i));
    } else {
      i == "+" ? (prefix = "plus") : (prefix = "minus");
    }
  }
  return sum;
}

//다른 사람 풀이
function solution(my_string) {
  const arr = my_string.split(" ").filter((e) => e);
  while (arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift());
  return arr[0];
}
