function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (!answer.includes(numbers[i] + numbers[j])) answer.push(numbers[i] + numbers[j]);
    }
  }
  return answer.sort((a, b) => a - b);
}

// Set 연습하자!

function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(answer)].sort((a, b) => a - b);
}
