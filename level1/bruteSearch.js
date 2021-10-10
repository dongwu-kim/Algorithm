function solution(answers) {
  var first = [1, 2, 3, 4, 5];
  var second = [2, 1, 2, 3, 2, 4, 2, 5];
  var third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var cnt = [0, 0, 0];
  var answer = [];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % 5]) {
      cnt[0]++;
    }
    if (answers[i] === second[i % 8]) {
      cnt[1]++;
    }
    if (answers[i] === third[i % 10]) {
      cnt[2]++;
    }
  }

  answer =
    cnt[0] > cnt[1] && cnt[0] > cnt[2]
      ? [1]
      : cnt[0] < cnt[1] && cnt[1] > cnt[2]
      ? [2]
      : cnt[0] < cnt[2] && cnt[2] > cnt[1]
      ? [3]
      : cnt[0] === cnt[1] && cnt[0] > cnt[2]
      ? [1, 2]
      : cnt[0] === cnt[1] && cnt[2] === cnt[1]
      ? [1, 2, 3]
      : cnt[0] > cnt[1] && cnt[0] === cnt[2]
      ? [1, 3]
      : cnt[0] < cnt[1] && cnt[1] === cnt[2]
      ? [2, 3]
      : [];
  return answer;
}

// 후반부 조건 단순화

function solution(answers) {
  var first = [1, 2, 3, 4, 5];
  var second = [2, 1, 2, 3, 2, 4, 2, 5];
  var third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var cnt = [0, 0, 0];
  var answer = [];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % 5]) {
      cnt[0]++;
    }
    if (answers[i] === second[i % 8]) {
      cnt[1]++;
    }
    if (answers[i] === third[i % 10]) {
      cnt[2]++;
    }
  }
  var max = Math.max(...cnt);

  if (max === cnt[0]) answer.push(1);
  if (max === cnt[1]) answer.push(2);
  if (max === cnt[2]) answer.push(3);

  return answer;
}
