// 내가 푼 풀이

function solution(s) {
  let py = {
    p: 0,
    y: 0,
  };

  let reviseS = s.toLowerCase();

  reviseS.split("").forEach((i) => {
    if (Object.keys(py).includes(i)) {
      py[i] += 1;
    }
  });

  if (py["p"] !== py["y"]) return false;

  return true;
}

// 다른 사람 풀이 중 눈에 띄는것

function numPY(s) {
  //함수를 완성하세요
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

// split 활용법을 다시한번 살펴봐야 할 듯 싶다.

//또 다른 좋은 풀이

function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
