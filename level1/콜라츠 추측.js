function solution(num) {
  var answer = 0;

  while (num !== 1) {
    if (answer === 500) return -1;
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    answer++;
  }

  return answer;
}

// Recursion
function collatz(num, count = 0) {
  return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}

// 발상의 전환
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
