const solution = (N, stages) => {
  var userPassOrStayCnt = Object.values(
    stages.reduce((acc, cur) => {
      for (let i = 1; i <= cur; i++) {
        if (acc[i]) {
          acc[i]++;
        } else {
          acc[i] = 1;
        }
      }
      return acc;
    }, {})
  );

  var stay = stages.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  var percentage = userPassOrStayCnt.map((elem, idx) => {
    if (stay[idx + 1] && stay[idx + 1] / elem !== 1) {
      return stay[idx + 1] / elem;
    } else if (stay[idx + 1] && stay[idx + 1] / elem === 1) {
      return 1;
    } else {
      return 0;
    }
  });

  var answer = [];

  for (let i = 0; i < N; i++) {
    if (percentage[i]) {
      answer.push(percentage[i]);
    } else {
      answer.push(0);
    }
  }

  return [...answer.keys()].sort((a, b) => percentage[b] - percentage[a]).map((elem) => elem + 1);
};

// 리팩토링
const solution = (N, stages) => {
  var obj = stages.reduce(
    (acc, cur) => {
      for (let i = 1; i <= cur; i++) {
        if (acc.userPassOrStayCnt[i]) {
          acc.userPassOrStayCnt[i]++;
        } else {
          acc.userPassOrStayCnt[i] = 1;
        }
      }
      if (acc.stay[cur]) {
        acc.stay[cur]++;
      } else {
        acc.stay[cur] = 1;
      }
      return acc;
    },
    { userPassOrStayCnt: {}, stay: {} }
  );

  var { userPassOrStayCnt, stay } = obj;
  userPassOrStayCnt = Object.values(userPassOrStayCnt);

  var answer = [];

  for (let i = 0; i < N; i++) {
    if (userPassOrStayCnt[i]) {
      if (stay[i + 1]) {
        answer.push(stay[i + 1] / userPassOrStayCnt[i]);
      } else {
        answer.push(0);
      }
    } else {
      answer.push(0);
    }
  }
  return [...answer.keys()].sort((a, b) => answer[b] - answer[a]).map((elem) => elem + 1);
};
