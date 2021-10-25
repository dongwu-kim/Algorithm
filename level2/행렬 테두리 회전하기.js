const generator = (rows, columns) => {
  var arr = [];
  for (let i = 1; i <= rows; i++) {
    var row = [];
    for (let j = 1; j <= columns; j++) {
      row.push((i - 1) * columns + j);
    }
    arr.push(row);
  }
  return arr;
};

const circulationAndCheckMinNum = (arr, x1, y1, x2, y2) => {
  var newArr = JSON.parse(JSON.stringify(arr));
  var minNum = arr[x1 - 1][y1 - 1];
  for (let i = y1 - 1; i < y2; i++) {
    if (minNum > newArr[x1 - 1][i]) {
      minNum = newArr[x1 - 1][i];
    }
    if (i === y1 - 1) {
      newArr[x1 - 1][i] = arr[x1][i];
    } else {
      newArr[x1 - 1][i] = arr[x1 - 1][i - 1];
    }
  }

  for (let i = x1; i < x2; i++) {
    if (minNum > newArr[i][y2 - 1]) {
      minNum = newArr[i][y2 - 1];
    }
    newArr[i][y2 - 1] = arr[i - 1][y2 - 1];
  }

  for (let i = y2 - 2; i > y1 - 2; i--) {
    if (minNum > newArr[x2 - 1][i]) {
      minNum = newArr[x2 - 1][i];
    }
    newArr[x2 - 1][i] = arr[x2 - 1][i + 1];
  }

  for (let i = x2 - 2; i > x1 - 1; i--) {
    if (minNum > newArr[i][y1 - 1]) {
      minNum = newArr[i][y1 - 1];
    }
    newArr[i][y1 - 1] = arr[i + 1][y1 - 1];
  }
  return [minNum, newArr];
};

const solution = (rows, columns, queries) => {
  var board = generator(rows, columns);
  var newBoard = [...board];
  var minNum = 0;
  var result = [];
  for (let i = 0; i < queries.length; i++) {
    const [x1, y1, x2, y2] = queries[i];
    [minNum, newBoard] = circulationAndCheckMinNum(newBoard, x1, y1, x2, y2);
    result.push(minNum);
  }
  return result;
};
