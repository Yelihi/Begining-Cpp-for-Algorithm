// 내 풀이
function solution(dots) {
  let first = dots[0];
  let width;
  let height;
  for (let dot of dots) {
    if (dot[0] - first[0]) width = Math.abs(dot[0] - first[0]);
    if (dot[1] - first[1]) height = Math.abs(dot[1] - first[1]);
  }
  return width * height;
}
