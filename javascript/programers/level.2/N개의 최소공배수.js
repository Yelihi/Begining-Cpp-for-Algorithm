// 너무 상심하지 말자. 그냥 유클리드 호제법도 몰랐고, 수학적 개념이 부족한것

const arr = [2, 6, 8, 14];

function gcd(a, b) {
  if (a % b == 0) return b;
  return gcd(b, a % b);
}

function lcd(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let n = arr[0];

  for (let i = 1; i < arr.length; i++) {
    n = lcd(n, arr[i]);
  }

  return n;
}

console.log(solution(arr));
