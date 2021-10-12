function solution(sizes) {
  var arr = [];

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][1] <= sizes[i][0]) {
      arr.push([sizes[i][0], sizes[i][1]]);
    } else {
      arr.push([sizes[i][1], sizes[i][0]]);
    }
  }

  return arr.sort((a, b) => a[0] - b[0])[arr.length - 1][0] * arr.sort((a, b) => a[1] - b[1])[arr.length - 1][1];
}
