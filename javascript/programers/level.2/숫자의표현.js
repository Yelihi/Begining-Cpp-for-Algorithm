/**
 *
 * @param {number} n
 * @returns
 * 주어진 숫자에 대해서 연속된 자연수값으로 표현할 수 있는 가지수를 구하는 문제
 * 연속된 자연수라는 점에서 확신을 가져보자
 * 연속되었다는 의미는 1씩 차이가 발생한다는 의미이다.
 * 예를 들어서 15라고 하면 4+5+6 으로 표현이 가능한데, 이는 4, 4+1, 4+2 이다
 * 따라서 15에서 1+2 를 빼준다음 3으로 나눠질 때 나머지가 0 이라면 표현이 가능하다는 의미이다
 * 밑 수식은 그부분을 가리키고 있다.
 */

function solution(n) {
  let answer = 0;
  let sum = 0;

  // o(n) 으로서 1만이기에 넘쳐흐른다.
  // sum 을 누적합으로 캐싱해주자. dp 개념
  // 0부터 차례대로 합쳐지게 되고 n / 1 은 0이니깐 answer 를 1 증가시킨다
  // 이렇게 하나하나 늘려나가면서 n - sum 을 i + 1 로 나눠주어 나머지를 조건식으로 넣어 answer 를 하나하나 추가한다
  for (let i = 0; i <= n; i++) {
    sum += i;
    if (sum >= n) break;
    if ((n - sum) % (i + 1) === 0) {
      answer += 1;
    }
  }

  return answer;
}
