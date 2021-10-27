const solution = (text) => {
  return text
    .split(" ")
    .filter((el) => el[0] === "#")
    .join("")
    .split("#")
    .reduce((acc, cur) => {
      var str = "";

      for (let i = 0; i < cur.length; i++) {
        if (
          (cur[i].charCodeAt() >= 65 && cur[i].charCodeAt() <= 90) ||
          (cur[i].charCodeAt() >= 97 && cur[i].charCodeAt() >= 122) ||
          (cur[i].charCodeAt() >= 48 && cur[i].charCodeAt() >= 57)
        ) {
          str = str + cur[i];
        } else {
          break;
        }
      }

      str !== "" && acc.push(str);
      return acc;
    }, []);
};
