process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let star = "".padStart(a, "*") + "\n";
  let answer = "";
  for (let i = 0; i < b; i++) {
    answer += star;
  }
  console.log(answer);
});

// 자바스크립트 반복문 내 console.log는 결합 구조인가?

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});

// 이걸로 level1 완료!
