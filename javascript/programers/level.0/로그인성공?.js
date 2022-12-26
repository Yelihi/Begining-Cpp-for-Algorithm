//내가 푼 풀이
function solution(id_pw, db) {
  for (let p_db of db) {
    if (id_pw[0] === p_db[0]) {
      if (id_pw[1] === p_db[1]) {
        return "login";
      } else {
        return "wrong pw";
      }
    }
  }
  return "fail";
}

//다른 사람 풀이
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}
