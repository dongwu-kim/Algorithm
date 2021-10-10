function solution(participant, completion) {
  var hash = {};
  var answer = "";

  for (let i = 0; i < participant.length; i++) {
    if (hash[participant[i]] === undefined) {
      hash[participant[i]] = 1;
    } else {
      hash[participant[i]]++;
    }
  }

  completion.forEach((elem) => {
    hash[elem] >= 1 && hash[elem]--;
  });

  for (let player in hash) {
    if (hash[player] !== 0) {
      answer = player;
    }
  }

  return answer;
}

// 인상깊던 풀이 1.

var solution = (_, $) =>
  _.find(
    (_) => !$[_]--,
    $.map((_) => ($[_] = ($[_] | 0) + 1))
  );

// 인상깊던 풀이 2

function solution(participant, completion) {
  var dic = completion.reduce((obj, t) => ((obj[t] = obj[t] ? obj[t] + 1 : 1), obj), {});
  return participant.find((t) => {
    if (dic[t]) dic[t] = dic[t] - 1;
    else return true;
  });
}
