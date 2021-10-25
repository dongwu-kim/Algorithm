const solution = (s) => {
  var stack = [s[0]];
  if (s.length % 2 !== 0) {
    return 0;
  }
  for (let i = 1; i < s.length; i++) {
    stack.push(s[i]);
    if (stack[stack.length - 2] === stack[stack.length - 1]) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length > 0 ? 0 : 1;
};
