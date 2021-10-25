function solution(progresses, speeds) {
  progresses = progresses.map((el, i) => {
    return Math.ceil((100 - el) / speeds[i]);
  });

  var queue = [];
  var dayCheck = progresses[0];

  for (let i = 0; i < progresses.length; i++) {
    if (progresses[i] > dayCheck) {
      queue.push(i);
      dayCheck = progresses[i];
      progresses.splice(0, i);
      i = 0;
    }
    if (i === progresses.length - 1) {
      queue.push(progresses.length);
    }
  }

  return queue;
}
