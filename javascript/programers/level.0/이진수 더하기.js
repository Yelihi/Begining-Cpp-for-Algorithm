// 내 풀이
// 2진수 -> 10진수 parseInt(2진수, 2);
// 10진수 -> 2진수 10진수.toString(2);

function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}
