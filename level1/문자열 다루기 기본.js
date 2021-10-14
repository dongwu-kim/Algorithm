// 문제이해를 잘못한 예 (본인의 풀이)
function solution(s) {
  return !/[a-zA-Z]/.test(s)
    ? s.length === 4 || s.length === 6
    : !/[0-9]/g.test(s) && (s.length === 4 || s.length === 6);
}
// 문제를 잘 본 예(좋아요 1등의 풀이)
function solution(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
