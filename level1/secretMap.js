const generateArr = (n, string) => {
  string = string.toString(2).split("");
  if (string.length < n) {
    for (let i = string.length; i < n; i++) {
      string.unshift("0");
    }
  }
  return string.join("");
};

const solution = (n, arr1, arr2) => {
  arr1 = arr1.map((elem) => generateArr(n, elem)).join("");
  arr2 = arr2.map((elem) => generateArr(n, elem)).join("");
  var parseStr = "";

  for (let i = 0; i < arr1.length; i++) {
    parseStr += arr1[i] | arr2[i];
  }

  var answer = [];

  for (let i = 0; i < n; i++) {
    var rowString = "";
    if (i + 1) {
      rowString = parseStr.slice(n * i, n * (i + 1));
    } else {
      rowString = parseStr.slice(n * (i - 1), n * i);
    }

    answer.push(rowString.replace(/0/g, " ").replace(/1/g, "#"));
  }
  return answer;
};

// 인상깊던 풀이 => padStart를 사용했다면 Parse나 기타 문자열 합을 구하는 과정을 전부 생략해도 된다.

var solution = (n, a, b) =>
  a.map((a, i) => (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#"));
