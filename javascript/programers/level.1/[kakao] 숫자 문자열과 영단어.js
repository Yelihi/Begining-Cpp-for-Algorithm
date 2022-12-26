// 내가 푼 풀이
function solution(s) {
  // replace 를 통해서 하면 되긴 하는데 최선이려나..
  // 일단 노가다로 한번 풀어보자 (replaceAll)

  let answer = s
    .replaceAll("zero", "0")
    .replaceAll("one", "1")
    .replaceAll("two", "2")
    .replaceAll("three", "3")
    .replaceAll("four", "4")
    .replaceAll("five", "5")
    .replaceAll("six", "6")
    .replaceAll("seven", "7")
    .replaceAll("eight", "8")
    .replaceAll("nine", "9");
  return answer - 0;
}

// 이건 너무 노가다인데... 뭔가 이게 최선인가 싶기도 하다.
// 또한 메서드를 활용한 것이라 이거 말고 다른 것이 있으려나 싶다...

// 다른사람 풀이
function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

// 놀랍다 이런 방법이나 방식을 이해해보자

// 또 다른 방식 (정규표현식으로 해결)
function solution(s) {
  s = s
    .replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9);
  return parseInt(s);
}
