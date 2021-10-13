function solution(scores) {
  var grade = "";

  for (let i = 0; i < scores.length; i++) {
    var score = [];

    for (let j = 0; j < scores.length; j++) {
      score.push(scores[j][i]);
    }

    var max = Math.max(...score);
    var min = Math.min(...score);

    var maxCnt = score.reduce((cnt, cur) => cnt + (cur === max), 0);
    var minCnt = score.reduce((cnt, cur) => cnt + (cur === min), 0);

    if (maxCnt === 1) {
      if (scores[i].indexOf(max) === i) {
        score.splice(i, 1);
      }
    }

    if (minCnt === 1) {
      if (scores[i].indexOf(min) === i) {
        score.splice(i, 1);
      }
    }

    score = Math.floor(score.reduce((acc, cur) => acc + cur, 0) / score.length);

    grade =
      grade +
      (score >= 90
        ? "A"
        : score >= 80 && score < 90
        ? "B"
        : score >= 70 && score < 80
        ? "C"
        : score >= 50 && score < 70
        ? "D"
        : "F");
  }

  return grade;
}

// 숏코딩의 정수, 챌린지 1등의 풀이
let solution = (scores) =>
  scores[0]
    .map((_, c) => scores.map((r) => r[c])) // 배열 재배치
    .map((s, i) => [...s.splice(i, 1), s])
    .map(([m, s]) => (Math.min(...s) <= m && m <= Math.max(...s) ? [m, ...s] : s))
    .map((s) => "FDDCBAA"[Math.max(parseInt(s.reduce((a, c) => a + c) / s.length / 10) - 4, 0)])
    .join("");
