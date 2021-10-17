function solution(x) {
  return x % (x + "").split("").reduce((acc, cur) => Number(acc) + Number(cur), 0) === 0 ? true : false;
}

// 형변환 다른 방법 => Number가 성능 측면에서는 좋다는데, 고민이 된다.

function Harshad(n) {
  return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}
