var reverse = function(x) {
  const number = String(Math.abs(x))
    .split("")
    .reverse()
    .join("");
  if (number > 0x7fffffff) {
    return 0;
  }
  return x < 0 ? -number : number;
};
