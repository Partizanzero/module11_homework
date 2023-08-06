function reverseStr(str) {
  const reverse = str.split("").reverse().join("");
  return reverse;
}

module.exports = reverseStr;
