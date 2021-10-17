function solution(arr1, arr2) {
  return arr1.map((el, idx) => {
    return el.map((num, numIdx) => {
      return num + arr2[idx][numIdx];
    });
  });
}

// Refactoring
function solution(arr1, arr2) {
  return arr1.map((el, idx) => el.map((num, numIdx) => num + arr2[idx][numIdx]));
}
