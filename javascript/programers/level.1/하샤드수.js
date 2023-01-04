// 내가 푼 풀이
function solution(x) {
  let sum = (x + "").split("").reduce((a, b) => Number(a) + Number(b));
  return (x - 0) % sum == 0 ? true : false;
}

// 다른 사람 풀이
// 숫자를 다룰 때 10씩 나누기를 이용해서 하는 방법도 생각해보자. 속도면에서 더 좋을 가능성이 있다.
function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}
