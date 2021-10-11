function solution(left, right) {
  var obj = {};
  var cnt = 0;
  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        cnt++;
      }
    }
    obj[i] = cnt;
    cnt = 0;
  }

  return Object.keys(obj).reduce((acc, cur) => {
    if (obj[cur] % 2 !== 0) {
      return acc - parseInt(cur, 10);
    } else {
      return acc + parseInt(cur, 10);
    }
  }, 0);
}

// 이과 선생님의 풀이;; (본인도 이과인데...)
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
