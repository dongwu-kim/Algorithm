function solution(new_id) {
  var answer = "";
  var highToLowRegExp = /[A-Z]/g;
  var noneStringRegExp = /[^a-z0-9\.\_\-]/g;
  var firstRegExp = /^\./;
  var endRegExp = /\.$/;
  var voidStringRegExp = /[^a-z]/g;

  if (highToLowRegExp.test(new_id)) {
    new_id = new_id.toLowerCase();
  }

  new_id = new_id.replace(noneStringRegExp, "").replace(/\.\.+/g, ".").replace(firstRegExp, "");
  replace(endRegExp, "");

  if (new_id.length === 0) {
    new_id = "a";
  }

  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);

    if (new_id[new_id.length - 1] === ".") {
      new_id = new_id.slice(0, new_id.length - 1);
    }
  }

  if (new_id.length <= 2) {
    let lastString = new_id[new_id.length - 1];
    for (let i = new_id.length; i < 3; i++) {
      new_id = new_id + lastString;
    }
  }

  answer = new_id;

  return answer;
}
