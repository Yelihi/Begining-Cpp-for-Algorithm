function solution(k, tangerine) {
  // 문제는 종류의 갯수에 대해 궁금할 뿐, 어떤 크기인지까지는 묻지 않는다
  // 핵심은 최소 종류가 나오려면 수가 많은 같은 크기부터 포함시켜야 한다
  // 예를 들면 10개를 뽑는데 8개의 1크기 귤이 있다면 우선적으로 1을 포함시켜야 하는것이다
  // 객체를 생성한다
  const obj = {};
  // 리턴할 값이자 종류의 갯수이다
  let answer = 0;
  // 배열을 순회하면서 객체에 value 로 귤의 갯수를 저장한다.
  // 10만정도니깐 충분하다.
  for (const tang of tangerine) {
    if (!obj[tang]) {
      obj[tang] = 1;
    } else {
      obj[tang]++;
    }
  }
  // 이제 객체에서 얻은 value 들을 배열로 가져온 다음
  // 정렬을 해주어야 한다. 정렬은 nlogn 이라 n이 최악으로서 10만이라도 어떻게된 처리될 것이다
  // 정렬 순서를 오름차순으로 하는 이유는 배열에서 pop 을 활용하고 싶기 때문이다
  // pop 은 O(1) 이기 때문이다
  const sortArray = Object.values(obj).sort((a, b) => a - b);
  // k 가 0이 되거나 0보다 작아지면 딱 그 지점까지가 종류의 개수이다.
  // 예를 들어 2개를 뽑는데 1크기가 4개라면 2-4 = -2 가 되고
  // 음수가 되었기에 while 은 멈추고 answer는 1이 추가된다. 이게 종류
  while (k > 0) {
    // 오름차순이기에 맨 뒤가 가장 큰 수다.
    let maxNum = sortArray.pop();
    // 큰 수를 빼준다.
    k = k - maxNum;
    // 종류를 하나 증가해준다.
    answer++;
  }

  return answer;
}

// 다른사람 풀이

function solution(k, tangerine) {
  let answer = 0;
  const tDict = {};
  tangerine.forEach((t) => (tDict[t] = (tDict[t] || 0) + 1));
  const tArr = Object.values(tDict).sort((a, b) => b - a);
  for (const t of tArr) {
    answer++;
    if (k > t) k -= t;
    else break;
  }
  return answer;
}
