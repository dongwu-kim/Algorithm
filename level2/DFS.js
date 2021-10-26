const solution = (numbers, target) => {
  var answer = 0;

  const dfs = (idx, sum) => {
    if (idx === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  };

  dfs(0, 0);

  return answer;
};

// 좀 더 스택과 친해지자!
