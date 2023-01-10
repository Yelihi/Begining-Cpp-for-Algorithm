// 내가 푼 풀이
function solution(price, money, count) {
  let facto = 0;
  for (let i = 1; i <= count; i++) {
    facto += i;
  }
  return money - price * facto > 0 ? 0 : price * facto - money;
}

// 다른 사람이 푼 풀이
// 가우스 공식을 활용한 풀이
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
