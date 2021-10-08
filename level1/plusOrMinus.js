function solution(absolutes, signs) {
  var answer = 0;

  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      answer = answer + absolutes[i];
    } else {
      answer = answer - absolutes[i];
    }
  }
  return answer;
}

// 인상깊던 풀이 : Reduce 와 곱셈
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
