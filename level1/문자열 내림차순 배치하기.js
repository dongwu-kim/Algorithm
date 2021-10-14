function solution(s) {
  return s
    .split("")
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join("");
}

// 그런데 자바스크립트 sort는 원래 유니코드 정렬이다. 따라서,
function solution(s) {
  return s.split("").sort().reverse().join("");
}
//로도 동일하게 계산할 수 있다.
