function solution(n) {
  var arr = ["4", "1", "2"];
  var answer = [];
  while (n > 0) {
    answer.unshift(arr[n % 3]);
    if (n % 3 === 0) {
      n = (n - 3) / 3;
    } else {
      n = (n - (n % 3)) / 3;
    }
  }
  return answer.join("");
}
