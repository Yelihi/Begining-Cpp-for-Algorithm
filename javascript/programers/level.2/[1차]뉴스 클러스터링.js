function distructing(str1) {
  const length = str1.length;
  const distructArray = [];
  for (let i = 0; i < length - 1; i++) {
    let elem = str1.substring(i, i + 2);
    if (elem.match(/[^a-z]/g)) {
      continue;
    } else {
      distructArray.push(elem);
    }
  }
  return distructArray;
}

function interSectionAndUnion(array1, array2) {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  let intersect = new Set();
  for (let elem of set1) {
    if (set2.has(elem)) {
      intersect.add(elem);
    }
  }
  let test = [...intersect];
  let union = [];
  array1.forEach((v) => {
    if (!test.includes(v)) {
      union.push(v);
    }
  });
  array2.forEach((v) => {
    if (!test.includes(v)) {
      union.push(v);
    }
  });
  return [[...intersect], union];
}

function obj(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj.hasOwnProperty(array[i])) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }
  return obj;
}

function solution(str1, str2) {
  let answer = 0;
  let reStr1 = str1.toLowerCase();
  let reStr2 = str2.toLowerCase();

  const dist1 = distructing(reStr1);
  const dist2 = distructing(reStr2);
  if (dist1.length === 0 && dist2.length === 0) return 65536;

  const [inter, union] = interSectionAndUnion(dist1, dist2);
  if (inter.length === 0) return 0;

  const str1Obj = obj(dist1);
  const str2Obj = obj(dist2);

  let interNumber = 0;
  let unionNumber = union.length;
  for (let elem of inter) {
    let minNumber = Math.min(str1Obj[elem], str2Obj[elem]);
    let maxNumber = Math.max(str1Obj[elem], str2Obj[elem]);
    interNumber += minNumber;
    unionNumber += maxNumber;
  }

  answer = Math.floor((interNumber / unionNumber) * 65536);
  return answer;
}
