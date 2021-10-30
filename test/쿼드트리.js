const generator = (arr) => {
  var newArr = [];

  if (arr.length === 1 && arr[0] === "b") {
    return Array(4).fill([1, 1, 1, 1]);
  }
  if (arr.length === 1 && arr[0] === "w") {
    return Array(4).fill([0, 0, 0, 0]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "p") {
      newArr.push(arr.slice(i + 1, i + 5));
      i += 4;
    } else {
      newArr.push([arr[i]]);
    }
  }

  return newArr.map((el) => {
    if (el.length !== 1) {
      return el.map((el2) => {
        if (el2 === "w") {
          return 0;
        } else return 1;
      });
    } else {
      if (el[0] === "b") {
        return [1, 1, 1, 1];
      } else {
        return [0, 0, 0, 0];
      }
    }
  });
};

const arithmetic = (arr, arr2) => {
  return arr.map((el, idx) => {
    return el.map((el2, idx2) => {
      return el2 + arr2[idx][idx2];
    });
  });
};

const solution = (s1, s2) => {
  let cnt = 0;
  if (s1[0] === "p") {
    s1 = s1.slice(1, s1.length);
  }
  if (s2[0] === "p") {
    s2 = s2.slice(1, s1.length);
  }

  s1 = generator(s1.split(""));
  s2 = generator(s2.split(""));

  arithmetic(s1, s2).forEach((el) => {
    el.forEach((el2) => {
      if (el2 > 0) {
        cnt = cnt + 64;
      }
    });
  });

  return cnt;
};

// 뭐가 문제였을까? 런타임이면, 시간 문제일까.
