function solution(d, budget) {
  var answer = 0;
  d = d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (budget >= d[i]) {
      budget = budget - d[i];
      answer++;
    } else {
      break;
    }
  }
  return answer;
}

// 오늘의 충격적인 풀이

function solution(d, budget) {
  return ~(
    ~d
      .sort((a, b) => a - b)
      .map((v) => (budget -= v))
      .findIndex((v) => v < 0) || ~d.length
  );
}
