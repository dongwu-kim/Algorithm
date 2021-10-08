function solution(nums) {
  var answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        var num = nums[i] + nums[j] + nums[k];
        if (num % 2 === 1) {
          for (let s = 3; s < num; s++) {
            if (num % s === 0) {
              break;
            } else if (s === num - 1 && num % s !== 0) {
              answer++;
              break;
            }
          }
        }
      }
    }
  }

  return answer;
}
