function isPrime(num) {
  if (num == 1) return false;
  if (num <= 3) return true;

  if (num % 2 == 0 || num % 3 == 0) return false;

  for (let i = 5; i * i < num; i = i + 6) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }

  return true;
}

function solution(k, n) {
  let answer = 0;
  const transN = n
    .toString(k)
    .split("0")
    .filter((v) => v);
  transN.forEach((num) => {
    if (isPrime(num)) answer++;
  });
  return answer;
}

// 다른 사람 풀이

function isPrime(n) {
  if (typeof n !== "number" || n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let nums = n.toString(k).split("0");
  return nums.filter((v) => isPrime(+v)).length;
}
