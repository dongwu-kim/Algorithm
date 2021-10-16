const solution = (s) => {
  return s
    .split(" ")
    .map((el) => {
      return el.replace(/\w/gi, (char, idx) => {
        return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      });
    })
    .join(" ");
};

// 정규표현식 인상깊던 풀이

function toWeirdCase(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}
