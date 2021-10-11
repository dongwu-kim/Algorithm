const solution = (nums) => {
  return Object.keys(
    nums.reduce((acc, cur) => {
      acc[cur] = true;
      return acc;
    }, {})
  ).slice(0, nums.length / 2).length;
};
