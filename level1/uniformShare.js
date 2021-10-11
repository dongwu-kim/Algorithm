function solution(n, lost, reserve) {
  var complete = 0;
  var lost = lost.sort((a, b) => a - b);
  var reserve = reserve.sort((a, b) => a - b);

  reserve = reserve.reduce((acc, cur, i) => {
    if (!lost.includes(cur)) {
      acc[cur] = true;
    } else {
      lost.splice(lost.indexOf(cur), 1);
    }
    return acc;
  }, {});

  for (let i = 0; i < lost.length; i++) {
    if (reserve[lost[i] - 1]) {
      reserve[lost[i] - 1] = false;
      complete++;
    } else if (reserve[lost[i] + 1]) {
      reserve[lost[i] + 1] = false;
      complete++;
    }
  }
  return n - lost.length + complete;
}

// 3시간 걸린 풀이..
