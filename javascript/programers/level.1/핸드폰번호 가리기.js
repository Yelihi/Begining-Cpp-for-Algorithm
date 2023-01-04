// 내가 푼 풀이
function solution(phone_number) {
  let last = phone_number.substring(phone_number.length - 4);
  let first = phone_number.substring(0, phone_number.length - 4).replace(/\d/g, "*");
  return first + last;
}

// 다른 사람 풀이
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 또 다른 풀이
function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);

  return result;
}
