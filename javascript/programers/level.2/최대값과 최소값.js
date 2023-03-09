function solution(s) {
  // 문자열을 배열로 변경 후 오름차순으로 정렬을 해주었다.
  const Array = s.split(" ").sort((a, b) => a - b);
  // 이후 조건에 맞게 리턴해준다.
  return `${Array[0]} ${Array[Array.length - 1]}`;
}
