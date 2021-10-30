const checkPAndX = (arr) => {
  let pArr = [];
  let xArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].split("").forEach((el, idx) => {
      if (el === "P") {
        pArr.push([i, idx]);
      } else if (el === "X") {
        xArr.push(`${i}` + `${idx}`);
      }
    });
  }
  return [pArr, xArr];
};

const checkMenhattan = ([pArr, xArr]) => {
  let check = true;
  console.log(pArr);
  for (let i = 0; i < pArr.length; i++) {
    for (let j = i + 1; j < pArr.length; j++) {
      const [r1, c1] = pArr[i];
      const [r2, c2] = pArr[j];
      if (Math.abs(r1 - r2) + Math.abs(c1 - c2) <= 2) {
        if (r1 === r2 && xArr.includes(`${r1}${c1 + 1}`)) {
          continue;
        } else if (c1 === c2 && xArr.includes(`${r1 + 1}${c1}`)) {
          continue;
        } else {
          if (c1 < c2) {
            if (xArr.includes(`${r1 - 1}${c1}`) && xArr.includes(`${r1}${c1 + 1}`)) {
              continue;
            }
          } else {
            if (xArr.includes(`${r1}${c1 - 1}`) && xArr.includes(`${r1 + 1}${c1}`)) {
              continue;
            }
            check = false;
          }
        }
      }
    }
  }
  return check ? 1 : 0;
};

const solution = (places) => {
  let answer = [];
  for (let i = 0; i < places.length; i++) {
    answer.push(checkMenhattan(checkPAndX(places[i])));
  }
  return answer;
};

// 미완
