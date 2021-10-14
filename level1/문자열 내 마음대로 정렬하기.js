const solution = (strings, n) => {
  return strings.sort((a, b) => {
    if (a[n] !== b[n]) {
      return a.charCodeAt(n) - b.charCodeAt(n);
    } else {
      var idx = [];
      for (let i = 0; i < (a.length >= b.length ? a.length : b.length); i++) {
        if (a[i] !== b[i]) {
          idx.push(i);
        }
      }
      return a[idx[0]] && b[idx[0]] ? a.charCodeAt(idx[0]) - b.charCodeAt(idx[0]) : -1;
    }
  });
};

// 1위의 풀이
// 문자열 비교 (사전)=> localeCompare

function solution(strings, n) {
  return strings.sort((s1, s2) => (s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])));
}
