function solution(lottos, win_nums) {
  var answer = [];
  var zeroCnt = 0;
  var matchCnt = 7;

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      zeroCnt++;
    }
    if (win_nums.includes(lottos[i])) {
      matchCnt--;
    }
  }

  if (matchCnt === 7) {
    matchCnt = 6;
  }

  if (zeroCnt === 6) {
    zeroCnt = 5;
  }

  answer.push(matchCnt - zeroCnt, matchCnt);

  return answer;
}
