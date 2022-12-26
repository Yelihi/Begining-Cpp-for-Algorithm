// 내가 푼 풀이 (조합)

function solution(number) {
  let answer = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }
  return answer;
}

// 그렇다면 자바스크립트로 순열을 만들려면 어떻게 해야하는 것일까.

function getPermutation(elements) {
  // 기저사례: 원소가 하나만 있으면 자기 자신을 반환한다.
  if (elements.length === 1) return [elements];
  const permutations = [];

  // 첫 번째 원소를 제외한 순열을 구한다.
  const smallerPermutations = getPermutation(elements.slice(1));

  // 첫 번째 원소를 넣을 수 있는 모든 곳에 넣어준다.
  const fisrtElement = elements[0];
  smallerPermutations.forEach((permutation) => {
    for (let positionIndex = 0; positionIndex <= permutation.length; positionIndex++) {
      const prefix = permutation.slice(0, positionIndex);
      const suffix = permutation.slice(positionIndex);
      permutations.push(prefix.concat([fisrtElement], suffix));
    }
  });

  return permutations;
}

// 참고로 조합

function getCombination(elements, pick) {
  // 기저사례: 골라야 하는 길이가 1이면 각 원소가 조합이 된다.
  if (pick === 1) return elements.map((elem) => [elem]);

  const combinations = [];
  // 각 원소에 남은 원소로 만들 수 있는 조합들을 붙인다.
  elements.forEach((element, index) => {
    // 만약 남은 원소의 길이가 골라야 하는 길이보다 짧으면 빈 배열이 반환되기 때문에 조합이 생성되지 않는다.
    const smallerCombinations = getCombination(elements.slice(index + 1), pick - 1);
    smallerCombinations.forEach((combination) => {
      combinations.push([element].concat(combination));
    });
  });
  return combinations;
}
