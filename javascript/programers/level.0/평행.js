//내가 푼 풀이
function solution(dots) {
  // 기울기 Math.abs(y2-y1) / Math.abs(x2 - x1)
  let slope = [];
  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      let first = dots[i];
      let second = dots[j];
      slope.push(Math.abs((second[1] - first[1]) / (second[0] - first[0])));
    }
    dots[i];
  }
  if ([...new Set(slope)].length !== slope.length) return 1;
  return 0;
}
