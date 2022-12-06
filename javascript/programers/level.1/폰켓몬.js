//내가 푼 풀이

function solution(nums) {
  let answer = 0;
  let poket = {};
  nums.forEach((num) => {
    if (poket[num]) {
      poket[num]++;
    }
    poket[num] = 1;
  });
  answer = Object.keys(poket).length >= nums.length / 2 ? nums.length / 2 : Object.keys(poket).length;
  return answer;
}

// 다른 사람 풀이 (map, set 을 활용해서 중복을 제거하기. 해쉬테이블 알고리즘이라 너무 유리하다. 꼭 익혀두자)

function solution(nums) {
  let maximum = nums.length / 2;
  let setNums = [...new Set(nums)];

  return setNums.length > maximum ? maximum : setNums.length;
}
