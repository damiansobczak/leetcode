var reverse = function(x) {
  const charArray = x.toString().split("");
  const isNegative = charArray.indexOf("-");
  if (isNegative !== -1) {
    charArray.splice(isNegative, isNegative + 1);
    charArray.reverse().unshift("-");
    return charArray.join("");
  }
  return charArray.reverse().join("");
};
