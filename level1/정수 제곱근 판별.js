function solution(n) {
  var m = Math.sqrt(n);
  return m % 1 === 0 ? (m + 1) * (m + 1) : -1;
}
