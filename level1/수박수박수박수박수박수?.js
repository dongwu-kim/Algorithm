function solution(n) {
  var answer = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      answer += "박";
    } else {
      answer += "수";
    }
  }
  return answer;
}

// 효율성 개선 refactoring

function solution(n) {
  return "수박".repeat(n / 2) + `${n % 2 === 1 ? "수" : ""}`;
}
