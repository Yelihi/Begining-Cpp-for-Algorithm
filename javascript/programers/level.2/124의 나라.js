function solution(n) {
  let answer = "";
  let number = ["4", "1", "2"];

  while (n > 0) {
    let remind = n % 3;
    n = Math.floor(n / 3);
    if (remind == 0) {
      n -= 1;
    }
    answer = number[remind] + answer;
  }

  return answer;
}
