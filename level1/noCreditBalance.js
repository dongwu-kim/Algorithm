function solution(price, money, count) {
  var answer = 0;
  for (let i = 1; i <= count; i++) {
    answer = answer + price * i;
  }

  return answer > money ? answer - money : 0;
}

// 가우스공식을 이용한 풀이

function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
