function solution(weights, head2head) {
  var arr = [];

  for (let i = 0; i < weights.length; i++) {
    arr[i] = [weights[i], head2head[i], i + 1];
  }

  var arr2 = arr.map((info) => {
    var matchNum = 0;
    var winNum = 0;
    var moreHeavyPlayerWin = 0;

    info[1].split("").forEach((match, idx) => {
      if (match === "W") {
        matchNum++;
        winNum++;
        if (info[0] < weights[idx]) {
          moreHeavyPlayerWin++;
        }
      } else if (match === "L") {
        matchNum++;
      }
    });

    var rate = winNum / matchNum;
    if (matchNum === 0 && winNum === 0) {
      rate = 0;
    }

    return [...info, rate, moreHeavyPlayerWin];
  });

  arr2 = arr2.sort((a, b) => {
    if (a[3] > b[3]) {
      return -1;
    } else if (a[3] === b[3]) {
      if (a[4] > b[4]) {
        return -1;
      } else if (a[4] === b[4]) {
        if (a[0] > b[0]) {
          return -1;
        } else if (a[0] === b[0]) {
          return 0;
        }
      }
    }
  });

  return arr2.map((el) => el[2]);
}
