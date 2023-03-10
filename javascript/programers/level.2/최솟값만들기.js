/**
 *
 * @param {Array} A
 * @param {Array} B
 * @returns
 *
 * 간단한 아이디어로 해결할 수 있다. 각 원소별 곱셉이 최소가 되게 하는 경우다
 * 최소가 되려면 결국 가장 작은 값과 가장 큰값이 곱해지어야 한다.
 * 그렇게 하려면 사전에 배열을 정돈하여 곱셉을 해주면 된다
 * 우선 A 는 오름차순, B는 내림차순으로 정렬한다. 정렬은 nlogn 이지만 n 이 1000 이기에 문제는 없다
 * 이후 reduce 를 통해서 합을 구해준다. acc 를 초기값 0 으로 설정해준다음, cur 과 sortB 의 값들을 곱해준다음 더해준다
 * 이렇게 하면 최소합이 구해진다
 */

function solution(A, B) {
  const sortA = A.sort((a, b) => a - b);
  const sortB = B.sort((a, b) => b - a);
  return sortA.reduce((acc, cur, idx) => acc + cur * sortB[idx], 0);
}
