function solution(a, b) {
  var answer = 0;
  for (let i = a > b ? b : a; i <= (a > b ? a : b); i++) {
    answer += i;
  }
  return answer;
}

// 또 너냐! 가우스?

function adder(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
