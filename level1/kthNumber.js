function solution(array, commands) {
  return commands.map((elem) => array.slice(elem[0] - 1, elem[1]).sort((a, b) => a - b)[elem[2] - 1]);
}
