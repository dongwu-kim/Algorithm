function solution(s, n) {
  return s
    .split("")
    .map((el) => {
      if (el === " ") {
        return " ";
      } else {
        if (/[a-z]/.test(el)) {
          return el.charCodeAt() + n > 122
            ? String.fromCharCode(96 + (el.charCodeAt() + n - 122))
            : String.fromCharCode(el.charCodeAt() + n);
        } else {
          return el.charCodeAt() + n > 90
            ? String.fromCharCode(64 + (el.charCodeAt() + n - 90))
            : String.fromCharCode(el.charCodeAt() + n);
        }
      }
    })
    .join("");
}

// 정규표현식 공부를 다짐하며 인상깊던 풀이 추가

function caesar(s, n) {
  return s.replace(/([a-z])|([A-Z])/g, (c, lowerCase) => {
    var startCode = lowerCase ? "a".charCodeAt(0) : "A".charCodeAt(0);
    return String.fromCharCode(((c.charCodeAt(0) - startCode + n) % 26) + startCode);
  });
}
