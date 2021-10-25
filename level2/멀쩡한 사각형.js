const gCD = (a, b) => {
  if (a % b === 0) {
    return b;
  } else {
    return gCD(b, a % b);
  }
};

function solution(w, h) {
  return w === h ? w * h - w : w > h ? w * h - (w + h - gCD(w, h)) : w * h - (w + h - gCD(h, w));
}

// 기울기를 이용한 풀이 -> 격자를 이동하며 잘린 값을 모두 더해준 다음 결과에서 빼준다.

function solution(w, h) {
  const slope = h / w;
  let result = 0;

  for (let i = 1; i <= w; i++) {
    result += Math.ceil(slope * i);
  }

  return (h * w - result) * 2;
}
