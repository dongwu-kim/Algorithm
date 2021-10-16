function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) {
      answer += i;
    }
  }
  return answer;
}

// 색다른 반복문, 계산량을 줄이기 위한 소수 알고리즘 일부 차용

function solution(n) {
  var answer = 0;
  let i;
  for (i = 1; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      answer += i + n / i;
    }
  }
  i--;
  return i === n / i ? answer - i : answer;
}
