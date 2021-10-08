function solution(board, moves) {
  let dollArr = [];
  let delCnt = 0;

  moves.forEach((line) => {
    line = line - 1;
    for (let i = 0; i < board.length; i++) {
      if (board[i][line] !== 0) {
        dollArr.push(board[i][line]);
        board[i].splice(line, 1, 0);
        if (dollArr.length - 2 >= 0 && dollArr[dollArr.length - 2] === dollArr[dollArr.length - 1]) {
          dollArr.splice(dollArr.length - 2, 2);
          delCnt = delCnt + 2;
        }
        break;
      }
    }
  });

  return delCnt;
}
