function solution(record) {
  var recordHash = record.reduce((acc, cur) => {
    const [event, id, name] = cur.split(" ");
    if (event === "Enter" || event === "Change") {
      acc[id] = name;
    }
    return acc;
  }, {});

  var answer = [];

  for (let i = 0; i < record.length; i++) {
    const [event, id, _] = record[i].split(" ");
    if (event === "Change") continue;
    event === "Enter" && answer.push(`${recordHash[id]}님이 들어왔습니다.`);
    event === "Leave" && answer.push(`${recordHash[id]}님이 나갔습니다.`);
  }

  return answer;
}
