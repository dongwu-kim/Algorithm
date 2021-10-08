function calcDis(arr, arr2) {
  return Math.abs(arr[0] - arr2[0]) + Math.abs(arr[1] - arr2[1]);
}

function solution(numbers, hand) {
  var lPad = [
    [1, 4, 7, "*"],
    [2, 5, 8, 0],
  ];
  var rPad = [
    [3, 6, 9, "#"],
    [2, 5, 8, 0],
  ];
  var lLocation = [0, 3];
  var rLocation = [0, 3];
  var answer = "";

  for (let i = 0; i < numbers.length; i++) {
    if (lPad[0].includes(numbers[i])) {
      lLocation = [0, lPad[0].indexOf(numbers[i])];
      answer = answer + "L";
    } else if (rPad[0].includes(numbers[i])) {
      rLocation = [0, rPad[0].indexOf(numbers[i])];
      answer = answer + "R";
    } else if (lPad[1].includes(numbers[i])) {
      var cLocation = [1, lPad[1].indexOf(numbers[i])];

      if (calcDis(lLocation, cLocation) < calcDis(rLocation, cLocation)) {
        lLocation = [1, lPad[1].indexOf(numbers[i])];
        answer = answer + "L";
      } else if (calcDis(lLocation, cLocation) === calcDis(rLocation, cLocation)) {
        if (hand === "left") {
          lLocation = [1, lPad[1].indexOf(numbers[i])];
          answer = answer + "L";
        } else {
          rLocation = [1, lPad[1].indexOf(numbers[i])];
          answer = answer + "R";
        }
      } else {
        rLocation = [1, lPad[1].indexOf(numbers[i])];
        answer = answer + "R";
      }
    }
  }
  return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
