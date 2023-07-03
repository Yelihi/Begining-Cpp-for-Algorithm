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
