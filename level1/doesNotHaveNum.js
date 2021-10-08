function solution(numbers) {
  var answer = 0;
  var numsArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  numsArr.forEach((elem) => {
    if (!numbers.includes(elem)) {
      answer = answer + elem;
    }
  });
  return answer;
}

// 인상깊던 풀이 : 더하는게 아닌 뺄셈으로 처리해버렸다.

function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
