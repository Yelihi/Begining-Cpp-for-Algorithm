//내가 푼 풀이
function isPrime(num) {
  if (num == 1) return 0;
  if (num <= 3) return 1;

  if (num % 2 == 0) return 0;

  for (let i = 2; i * i < num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }

  return 1;
}

function solution(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = [nums[i], nums[j], nums[k]].reduce((a, b) => a + b);
        result += isPrime(sum);
      }
    }
  }
  return result;
}

// 다른 사람 풀이
// 나머지는 같아서 콤비네이션만 가져왔음
function getCombination(arr, len = arr.length) {
  if (len === 1) return arr.map((el) => [el]);

  const combis = [];

  arr.forEach((curr, idx) => {
    const smallerCombis = getCombination(arr.slice(idx + 1), len - 1);

    smallerCombis.forEach((smallerCombi) => {
      combis.push([curr, ...smallerCombi]);
    });
  });

  return combis;
}
