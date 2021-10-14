function solution(s) {
  var yCnt = 0;
  var pArr = s
    .toLowerCase()
    .split("")
    .filter((elem) => {
      elem === "y" && yCnt++;
      return elem === "p";
    });

  return pArr.length === yCnt ? true : false;
}

// 좋아요 1등의 비교법

function numPY(s) {
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
