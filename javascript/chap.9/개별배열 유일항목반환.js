// 일부 동일한 값을 지닌 두 배열이 있을 때, 두 배열의 유일한 항목들만을 지닌 하나의 배열을 반환한다.

function onlySet(arr1, arr2) {
  let onlyArr = arr1.concat(arr2);
  return [...new Set(onlyArr)];
}

console.log(onlySet([1, 2, 3, 4, 5], [2, 3, 4, 1, 6, 7, 8, 9]));
