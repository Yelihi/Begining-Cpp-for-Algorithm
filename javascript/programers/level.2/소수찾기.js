function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function solution(numbers) {
  let count = 0;
  const object = {};

  for (const key of numbers) {
    if (!object[Number(key)]) {
      object[Number(key)] = 1;
    } else {
      object[Number(key)]++;
    }
  }
  const maxNum = numbers
    .split("")
    .sort((a, b) => Number(b) - Number(a))
    .join("");

  for (let i = 0; i <= Number(maxNum); i++) {
    const Iarray = String(i).split("");
    const copyObject = { ...object };
    let condition = Iarray.every((str) => {
      let num = Number(str);
      if (copyObject[num]) {
        copyObject[num]--;
        return true;
      } else {
        return false;
      }
    });
    if (condition && isPrime(i)) {
      count++;
    }
  }

  return count;
}
