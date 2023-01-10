// 내가 푼 풀이
function solution(sizes) {
  let max = 0;
  let minArr = [];
  sizes.forEach((v) => (max = Math.max(max, v[0], v[1])));
  sizes.forEach((v) => {
    if (max - v[0] >= max - v[1]) {
      minArr.push(v[0]);
    } else if (max - v[0] < max - v[1]) {
      minArr.push(v[1]);
    }
  });
  let min = Math.max(...minArr);
  return max * min;
}

// 다른 사람 풀이
function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}
