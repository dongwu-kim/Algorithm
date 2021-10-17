function solution(phone_number) {
  return phone_number.replace(/[\d]/g, (_, idx) => (idx > phone_number.length - 5 ? _ : "*"));
}
// 정규표현식 좋아요 1등
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
// 성능 최적화 repeat, slice > replace
function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  //함수를 완성해주세요

  return result;
}
