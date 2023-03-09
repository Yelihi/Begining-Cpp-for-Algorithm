function solution(clothes) {
  // 어쩐지 익숙하다 했는데... 안입는 경우를 0이라 하여 하나 더 추가하는 방식
  const hash = {};
  for (let i = 0; i < clothes.length; i++) {
    let name = clothes[i][0];
    let categori = clothes[i][1];
    if (hash[categori] === undefined) {
      hash[categori] = [name];
    } else {
      hash[categori].push(name);
    }
  }
  let result = 1;
  /**
   * 핵심은 안입는 경우까지 추가주는 것이다.
   * 헤드기어가 2개 있다면 여기에 안입는 것까지 해서 총 3개의 원소를 가지게 한다
   * 이후 이를 활용해서 경우의 수를 구해주면 된다.
   */
  for (let name in hash) {
    result *= hash[name].length + 1;
  }

  return result - 1;
}
