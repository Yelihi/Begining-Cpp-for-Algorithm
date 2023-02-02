// 집합을 사용해 배열에 중복 항목이 있는지 확인한다.

function checkDuplicates(arr) {
  let duplicateArr = new Set(arr);
  return arr.length === duplicateArr.size;
}

console.log(checkDuplicates([1, 2, 3, 4, 5]));
console.log(checkDuplicates([1, 2, 3, 4, 4]));
