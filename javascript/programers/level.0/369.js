// 내가 푼 풀이
function solution(order) {
  return (order + "").split("").filter((v) => ["3", "6", "9"].includes(v)).length;
}

// 다른 사람 풀이
function solution(order) {
  return (order + "").replace(/[0,1,2,4,5,7,8]/g, "").length;
}
