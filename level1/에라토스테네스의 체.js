function solution(n) {
  var answer = Array(n + 1).fill(true);
  answer.splice(0, 2, false, false);

  for (let i = 2; i * i <= n; i++) {
    if (answer[i]) {
      for (let j = i * i; j <= n; j += i) {
        answer[j] = false;
      }
    }
  }
  return answer.filter((el) => el).length;
}
