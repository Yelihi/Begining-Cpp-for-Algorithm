function solution(genres, plays) {
  let totalPlays = {};
  let genresSort = {};
  let answer = [];
  for (let i = 0; i < genres.length; i++) {
    if (!totalPlays[genres[i]] || !genresSort[genres[i]]) {
      totalPlays[genres[i]] = plays[i];
      genresSort[genres[i]] = [[plays[i], i]];
    } else {
      totalPlays[genres[i]] += plays[i];
      genresSort[genres[i]].push([plays[i], i]);
      genresSort[genres[i]].sort((a, b) => b[0] - a[0]);
      if (genresSort[genres[i]].length === 3) {
        genresSort[genres[i]].splice(2, 1);
      }
    }
  }
  const totalSort = Object.entries(totalPlays).sort((a, b) => b[1] - a[1]);
  for (let genres of totalSort) {
    genresSort[genres[0]].forEach((v) => answer.push(v[1]));
  }
  return answer;
}

// 아쉬운 점은 메모리 차지가 크다는 점이다. 객체와 배열이 총 3가지이니..

// 강사님 풀이
// 묶는다 -> 해쉬 테이블을 떠오르자 + 정렬
function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play: index }].sort((a, b) => b.play - a.play).slice(0, 2),
      });
    });

  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}
