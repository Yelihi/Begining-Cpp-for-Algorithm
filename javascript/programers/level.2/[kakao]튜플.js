// 문자열 s 가 주어진다. 이 s 는 튜플의 집합을 나타냄
// 순서가 있다.
// 따라서 우선 문자열을 , 로 나눈다음 각각 배열의 원소가 되었을 때
// 각각의 원소를 원소의 길이? 로 정렬한 다음에
// 처음 원소들을 정답 배열에 추가한다.
// 두번째 원소는 첫번째 원소가 포함되어있고, 그 다음이니, 포함안된 숫자를
// 배열에 집어넣는다. 이런식으로 answer 를 추가해나간다.
// s의 길이는 1000000 이하이니 n2 은 안된다.includes 쓰기 애매
// return 하는 배열 길이가 1 이상 500 이하 만 주어진다.

function solution(s) {
  const answer = [];
  const test = s
    .slice(1, s.length - 1)
    .replaceAll("},{", "}.{")
    .split(".")
    .sort((a, b) => a.length - b.length);

  test.forEach((elem, i) => {
    const reElem = elem.replace("{", "").replace("}", "");
    if (i === 0) {
      answer.push(reElem - 0);
      return;
    }
    const newElemArr = reElem.split(",").map((number) => number - 0);
    newElemArr.forEach((num) => {
      if (!answer.includes(num)) {
        answer.push(num);
      }
    });
  });

  return answer;
}
